<script lang="ts">
	import { getExpensesStore } from '$lib/expensesStore.svelte';
	import { enhance } from '$app/forms';

	// here is working fine, I can get the store and use it
	const expensesStore = getExpensesStore();
</script>

<h1>Expenses</h1>

<form method="POST" use:enhance>
	<input type="text" name="description" placeholder="Description" />
	<input type="number" name="amount" placeholder="Amount" />
	<input type="submit" value="Add Expense" />
</form>

<table style="border: 1px solid red;">
	<thead>
		<tr>
			<th>Description</th>
			<th>Amount</th>
		</tr>
	</thead>
	<tbody>
		{#each expensesStore.expenses as expense}
			<tr>
				<td>{expense.description}</td>
				<td>{expense.amount}</td>
			</tr>
		{/each}
	</tbody>
</table>
