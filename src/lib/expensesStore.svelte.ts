import { getContext, setContext } from 'svelte';

export interface Expense {
	amount: number;
	description: string;
}
export class ExpensesStore {
	public expenses: Expense[] = $state([]);
	public addExpense(expense: Expense) {
		this.expenses.push(expense);
		return true;
	}
	public getExpenses() {
		return this.expenses;
	}

	constructor(expenses: Expense[]) {
		this.expenses = expenses;
	}
}

const EXPENSES_CTX = 'EXPENSES_CTX';

export function createExpensesStore(expenses: Expense[]) {
	const divisaoStore = new ExpensesStore(expenses);
	setContext(EXPENSES_CTX, divisaoStore);
	return divisaoStore;
}

export function getExpensesStore() {
	return getContext<ExpensesStore>(EXPENSES_CTX);
}
