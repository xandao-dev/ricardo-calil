import { State, Mutations, IMutations } from './types';

export const state = (): State => ({
	isSidebarOpen: false,
});

export const mutations: IMutations = {
	[Mutations.TOGGLE_SIDEBAR]: (state, status) => (state.isSidebarOpen = status),
};
