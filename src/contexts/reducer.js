export const initialState = {
	projects: [],
	featuredProject: {},
	userId: '',
	isAdmin: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return {
				...state,
				userId: action.uid,
			};
		case 'LOG_USER_OUT':
			return {
				...state,
				userId: '',
				isAdmin: false,
			};
		case 'SET_PROJECTS':
			return {
				...state,
				projects: action.projects,
			};
		case 'SET_ADMIN':
			return {
				...state,
				isAdmin: true,
			};
		case 'SET_FEATURED':
			return {
				...state,
				featuredProject: action.project,
			};
		default:
			return {
				...state,
			};
	}
};

export default reducer;
