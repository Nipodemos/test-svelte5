import { getExpensesStore } from '$lib/expensesStore.svelte.js';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const amount = Number(formData.get('amount'));
		const description = String(formData.get('description'));

		if (!amount || !description) {
			return fail(400, { message: 'Invalid amount or description' });
		}

		console.log({ amount, description });

		const expensesStore = getExpensesStore();
		expensesStore.addExpense({ amount, description });
		return {
			success: true
		};
	}
} satisfies Actions;
