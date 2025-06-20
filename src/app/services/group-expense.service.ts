import { Injectable } from '@angular/core';
import { GroupMember } from '../interfaces/GroupMember';
import { Expense } from '../interfaces/Expense';
import { Settlement } from '../interfaces/Settlement';

export interface GroupData {
  groupMembers: GroupMember[];
  expenses: Expense[];
  groupName: string;
  groupDescription?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GroupExpenseService {
  private storageKey = 'groupData';
  private groupData: GroupData = {
    groupName: '',
    groupDescription: '',
    groupMembers: [],
    expenses: [],
  };

  constructor() {
    this.loadData();
  }

  findObject(arr: any[], key: keyof any, value: any): any | undefined {
    return arr.find((obj) => obj[key] === value);
  }

  addGroupDetails(name: string, description?: string): void {
    this.groupData.groupName = name;
    this.groupData.groupDescription = description || '';
    this.saveData();
  }
  getGroupDetails(): { name: string; description?: string } {
    return {
      name: this.groupData.groupName,
      description: this.groupData.groupDescription,
    };
  }

  // =========================
  // Group Member Methods
  // =========================

  addMember(name: string, email: string = ''): void {
    // Avoid duplicates

    if (
      !this.groupData.groupMembers.find(
        (member) =>
          member.name === name || (email !== null && member.email === email)
      )
    ) {
      this.groupData.groupMembers.push({ name: name, email: email });
      this.saveData();
    }
  }

  removeMember(name: string): void {
    this.groupData.groupMembers = this.groupData.groupMembers.filter(
      (member) => member.name !== name
    );
    this.saveData();
  }

  getMembers(): GroupMember[] {
    return this.groupData.groupMembers;
  }

  // =========================
  // Expense Methods
  // =========================

  addExpense(expense: Expense): void {
    this.groupData.expenses.push(expense);
    this.saveData();
  }

  removeExpense(id: number): void {
    const indexToRemove = this.groupData.expenses.findIndex(
      (item) => item.id === id
    );
    if (indexToRemove >= 0 && indexToRemove < this.groupData.expenses.length) {
      this.groupData.expenses.splice(indexToRemove, 1);
      this.saveData();
    }
  }

  getExpenses(): Expense[] {
    return this.groupData.expenses;
  }

  getSingleExpense(id: number) {
    console.log(this.groupData.expenses.find((item) => item.id === id));

    return this.groupData.expenses.find((item) => item.id === id);
  }

  editExpense(id: number, data: Expense) {
    const indexToEdit = this.groupData.expenses.findIndex(
      (item) => item.id === id
    );

    if (indexToEdit >= 0 && indexToEdit < this.groupData.expenses.length) {
      this.groupData.expenses[indexToEdit] = data;
      this.saveData();
    }
  }

  // =========================
  // Calculation Methods
  // =========================

  /**
   * Calculates the total share for each member based on the expenses.
   * Each expense is split equally among the participants listed in 'splitBetween'.
   */
  calculateShares(): { [member: string]: number } {
    const shares: { [member: string]: number } = {};

    // Initialize share amounts for each member
    this.groupData.groupMembers.forEach((member) => {
      shares[member.name] = 0;
    });

    // Calculate the share for each expense
    this.groupData.expenses.forEach((expense) => {
      const numParticipants = expense.splitBetween.length;
      if (numParticipants > 0) {
        const shareAmount = expense.amount / numParticipants;
        expense.splitBetween.forEach((name) => {
          // Add shareAmount to the member's total; if not found, initialize it.
          shares[name] = (shares[name] || 0) + shareAmount;
        });
      }
    });

    return shares;
  }


  /**
   * Calculates settlements where each person pays directly to the person who paid,
   * with an optimization that people who owe each other will just pay the difference.
   */
  calculateDirectSettlements(): Settlement[] {
    const settlements: Settlement[] = [];

    // Step 1: Create a matrix of who owes what to whom
    const owingMatrix: {
      [fromPerson: string]: { [toPerson: string]: number };
    } = {};

    // Initialize the matrix
    this.groupData.groupMembers.forEach((fromMember) => {
      owingMatrix[fromMember.name] = {};
      this.groupData.groupMembers.forEach((toMember) => {
        owingMatrix[fromMember.name][toMember.name] = 0;
      });
    });

    // Step 2: Calculate what each person owes to each payer based on expenses
    this.groupData.expenses.forEach((expense) => {
      const payer = expense.paidBy;
      const participants = expense.splitBetween;
      const shareAmount = expense.amount / participants.length;

      participants.forEach((participant) => {
        if (participant !== payer) {
          // Add to what this participant owes to the payer
          owingMatrix[participant][payer] += shareAmount;
        }
      });
    });

    // Step 3: Process each pair of people once to create settlements
    const processedPairs = new Set<string>();

    this.groupData.groupMembers.forEach((fromMember) => {
      const fromPerson = fromMember.name;

      this.groupData.groupMembers.forEach((toMember) => {
        const toPerson = toMember.name;

        if (fromPerson !== toPerson) {
          // Create a unique key for this pair to avoid processing twice
          const pairKey = [fromPerson, toPerson].sort().join('-');

          if (!processedPairs.has(pairKey)) {
            processedPairs.add(pairKey);

            // What fromPerson owes toPerson
            const fromOwesToTo = owingMatrix[fromPerson][toPerson];

            // What toPerson owes fromPerson
            const toOwesToFrom = owingMatrix[toPerson][fromPerson];

            // If both owe each other, create a settlement for the difference
            if (fromOwesToTo > 0.01 && toOwesToFrom > 0.01) {
              const netAmount = Math.abs(fromOwesToTo - toOwesToFrom);

              if (netAmount > 0.01) {
                if (fromOwesToTo > toOwesToFrom) {
                  settlements.push({
                    from: fromPerson,
                    to: toPerson,
                    amount: parseFloat(netAmount.toFixed(2)),
                  });
                } else {
                  settlements.push({
                    from: toPerson,
                    to: fromPerson,
                    amount: parseFloat(netAmount.toFixed(2)),
                  });
                }
              }
            }
            // Otherwise, create direct settlements
            else {
              // If fromPerson owes toPerson
              if (fromOwesToTo > 0.01) {
                settlements.push({
                  from: fromPerson,
                  to: toPerson,
                  amount: parseFloat(fromOwesToTo.toFixed(2)),
                });
              }

              // If toPerson owes fromPerson
              if (toOwesToFrom > 0.01) {
                settlements.push({
                  from: toPerson,
                  to: fromPerson,
                  amount: parseFloat(toOwesToFrom.toFixed(2)),
                });
              }
            }
          }
        }
      });
    });

    return settlements;
  }


   /**
   * Calculates what each member owes or is owed based on expenses
   * and who paid for what. The result is a list of settlements that need
   * to happen to balance everyone out.
   * 
   * This is an implementation of the debt simplification algorithm
   * that minimizes the number of transactions needed.
   */
  calculateMinimizedSettlements(): Settlement[] {
    const settlements: Settlement[] = [];
    
    // Step 1: Calculate what each person paid
    const paid: { [member: string]: number } = {};
    this.groupData.groupMembers.forEach(member => {
      paid[member.name] = 0;
    });
    
    this.groupData.expenses.forEach(expense => {
      paid[expense.paidBy] = (paid[expense.paidBy] || 0) + expense.amount;
    });
    
    // Step 2: Calculate what each person should pay
    const shares = this.calculateShares();
    
    // Step 3: Calculate net balance (negative means you owe, positive means you're owed)
    const balances: { name: string; amount: number }[] = [];
    
    for (const member of this.groupData.groupMembers) {
      const memberName = member.name;
      const balance = paid[memberName] - shares[memberName];
      balances.push({ name: memberName, amount: balance });
    }
    
    // Step 4: Sort balances - debtors first, then creditors
    balances.sort((a, b) => a.amount - b.amount);
    
    // Step 5: Create settlements by matching biggest debtor with biggest creditor
    let i = 0; // Index for debtors (negative balances)
    let j = balances.length - 1; // Index for creditors (positive balances)
    
    while (i < j) {
      const debtor = balances[i];
      const creditor = balances[j];
      
      // Skip if either has a zero balance (already settled)
      if (Math.abs(debtor.amount) < 0.01) {
        i++;
        continue;
      }
      
      if (Math.abs(creditor.amount) < 0.01) {
        j--;
        continue;
      }
      
      // Find the smaller of the two amounts
      const amount = Math.min(Math.abs(debtor.amount), creditor.amount);
      
      if (amount > 0.01) { // Only add settlements for amounts > 1 cent
        settlements.push({
          from: debtor.name,
          to: creditor.name,
          amount: parseFloat(amount.toFixed(2)) // Round to 2 decimal places
        });
      }
      
      // Update balances
      debtor.amount += amount;
      creditor.amount -= amount;
      
      // If a person's balance is resolved, move to the next person
      if (Math.abs(debtor.amount) < 0.01) {
        i++;
      }
      
      if (Math.abs(creditor.amount) < 0.01) {
        j--;
      }
    }
    
    return settlements;
  }

  /**
   * Get a detailed breakdown of expenses for each member
   */
  getDetailedBreakdown(): {
    [member: string]: {
      paid: number;
      owed: number;
      net: number;
      details: any[];
    };
  } {
    const breakdown: {
      [member: string]: {
        paid: number;
        owed: number;
        net: number;
        details: any[];
      };
    } = {};

    // Initialize breakdown object for each member
    this.groupData.groupMembers.forEach((member) => {
      breakdown[member.name] = {
        paid: 0,
        owed: 0,
        net: 0,
        details: [],
      };
    });

    // Process each expense
    this.groupData.expenses.forEach((expense) => {
      // Add to the amount paid by the payer
      breakdown[expense.paidBy].paid += expense.amount;

      // Calculate share per participant
      const shareAmount = expense.amount / expense.splitBetween.length;

      // Add to the amount owed by each participant
      expense.splitBetween.forEach((name) => {
        breakdown[name].owed += shareAmount;

        // Add expense detail for this member
        breakdown[name].details.push({
          expenseName: expense.expenseName,
          paidBy: expense.paidBy,
          totalAmount: expense.amount,
          shareAmount: shareAmount,
          isPayee: name === expense.paidBy,
        });
      });
    });

    // Calculate net balance for each member (positive: they are owed money, negative: they owe money)
    this.groupData.groupMembers.forEach((member) => {
      breakdown[member.name].net =
        breakdown[member.name].paid - breakdown[member.name].owed;
    });

    return breakdown;
  }


 

  // =========================
  // Local Storage Persistence
  // =========================

  private saveData(): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.groupData));
  }

  private loadData(): void {
    const data = sessionStorage.getItem(this.storageKey);
    if (data) {
      try {
        this.groupData = JSON.parse(data);
      } catch (error) {
        console.error('Error parsing group data from sessionStorage:', error);
        // Reset data in case of error
        this.groupData = {
          groupName: '',
          groupDescription: '',
          groupMembers: [],
          expenses: [],
        };
      }
    }
  }

  // Optional: Clear all stored data
  clearData(): void {
    sessionStorage.removeItem(this.storageKey);
    this.groupData = {
      groupName: '',
      groupDescription: '',
      groupMembers: [],
      expenses: [],
    };
  }
}
