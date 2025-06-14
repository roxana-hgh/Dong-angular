export interface Expense {
  id: number;
  expenseName: string;
  amount: number;
  paidBy: string;
  splitBetween: string[]; // List of member names sharing the expense
}