import { ExpenseDetail } from "./Expense";

export interface Settlement {
  from: string;
  to: string;
  amount: number;
}

export interface MemberSummary {
  name: string;
  totalOwed: number;        // What they owe in total
  totalPaid: number;        // What they paid in total
  netBalance: number;       // Positive means they're owed money, negative means they owe
  details: ExpenseDetail[];
}