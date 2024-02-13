import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async () => {
	// simulating getting expenses from a database
	const expenses = [
		{ amount: 100, description: 'Lunch' },
		{ amount: 200, description: 'Dinner' }
	];
	return { expenses };
};
