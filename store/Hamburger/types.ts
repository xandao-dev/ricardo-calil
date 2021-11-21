import { MutationTree } from 'vuex';

export interface State {
	isSidebarOpen: boolean;
}

export enum Mutations {
	TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
}

type RootState = ReturnType<() => State>;

export interface IMutations extends MutationTree<RootState> {
	[Mutations.TOGGLE_SIDEBAR]: (state: State, status: boolean) => void;
}
