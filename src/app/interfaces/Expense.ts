export interface Expense {
  id: number;
  expenseName: string;
  amount: number;
  paidBy: string;
  splitBetween: string[]; // List of member names sharing the expense
}

export interface ExpenseDetail {
  expenseName: string;
  paidBy: string;
  totalAmount: number;
  contribution: number;
  isPayee: boolean;
}