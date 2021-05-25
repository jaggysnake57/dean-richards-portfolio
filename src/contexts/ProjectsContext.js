import React, { createContext, useContext, useReducer } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = ({
	reducer,
	initialState,
	children,
}) => {
	return (
		<ProjectsContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</ProjectsContext.Provider>
	);
};

export const useStateValue = () => useContext(ProjectsContext);
