import { Injectable } from '@angular/core';

// Define interfaces for our data structures
export interface GroupMember {
  name: string;
}

export interface Expense {
  expenseName: string;
  amount: number;
  paidBy: string;
  splitBetween: string[]; // List of member names sharing the expense
}

export interface GroupData {
  groupMembers: GroupMember[];
  expenses: Expense[];
}

@Injectable({
  providedIn: 'root'
})
export class GroupExpenseService {
  private storageKey = 'groupData';
  private groupData: GroupData = {
    groupMembers: [],
    expenses: []
  };

  constructor() {
    this.loadData();
  }

  // =========================
  // Group Member Methods
  // =========================

  addMember(name: string): void {
    // Avoid duplicates
    if (!this.groupData.groupMembers.find(member => member.name === name)) {
      this.groupData.groupMembers.push({ name });
      this.saveData();
    }
  }

  removeMember(name: string): void {
    this.groupData.groupMembers = this.groupData.groupMembers.filter(member => member.name !== name);
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

  removeExpense(index: number): void {
    if (index >= 0 && index < this.groupData.expenses.length) {
      this.groupData.expenses.splice(index, 1);
      this.saveData();
    }
  }

  getExpenses(): Expense[] {
    return this.groupData.expenses;
  }

  // =========================
  // Calculation Method
  // =========================

  /**
   * Calculates the total share for each member based on the expenses.
   * Each expense is split equally among the participants listed in 'splitBetween'.
   */
  calculateShares(): { [member: string]: number } {
    const shares: { [member: string]: number } = {};

    // Initialize share amounts for each member
    this.groupData.groupMembers.forEach(member => {
      shares[member.name] = 0;
    });

    // Calculate the share for each expense
    this.groupData.expenses.forEach(expense => {
      const numParticipants = expense.splitBetween.length;
      if (numParticipants > 0) {
        const shareAmount = expense.amount / numParticipants;
        expense.splitBetween.forEach(name => {
          // Add shareAmount to the member's total; if not found, initialize it.
          shares[name] = (shares[name] || 0) + shareAmount;
        });
      }
    });

    return shares;
  }

  // =========================
  // Local Storage Persistence
  // =========================

  private saveData(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.groupData));
  }

  private loadData(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      try {
        this.groupData = JSON.parse(data);
      } catch (error) {
        console.error('Error parsing group data from localStorage:', error);
        // Reset data in case of error
        this.groupData = {
          groupMembers: [],
          expenses: []
        };
      }
    }
  }

  // Optional: Clear all stored data
  clearData(): void {
    localStorage.removeItem(this.storageKey);
    this.groupData = {
      groupMembers: [],
      expenses: []
    };
  }
}
