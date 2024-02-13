<script lang="ts">
	import { createExpensesStore, type Expense } from '$lib/expensesStore.svelte';

	interface Props {
		data: {
			expenses: Expense[];
		};
		children: any;
	}
	let { children, data } = $props<Props>();

	//initialize the store with the data from the server
	createExpensesStore(data.expenses);
</script>

{@render children()}
