import { getExpensesStore } from '$lib/expensesStore.svelte.js';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		// the problem is here, in this function, i can't access the store
		// it giver me an error: ERR_SVELTE_ORPHAN_CONTEXTContext can only be used during component initialisation.
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
