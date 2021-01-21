import React, { createContext, useContext, useReducer, useState } from 'react';

export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
	const [projects, setProjects] = useState([
		{
			name: 'Social Ape',
			imageName: 'thumb-gray.png',
			blurb:
				'A simple React website with Redux, that was writen useing class based components.  I converted it to functional components and updated redux to use the redux tool-kit',
			link: 'http://dean-richards.uk',
			featured: true,
			category: ['mern', 'react', 'redux', 'firebase'],
		},
		{
			name: 'iMessage Clone',
			imageName: 'imessage.jpg',
			blurb:
				'A basic iMessage clone that runs off firebase and uses the firebase authentication API. It uses firebase snapshots to update chats when a user adds a new message',
			link: 'http://dean-richards.uk',
			featured: true,
			category: ['mern', 'react', 'redux', 'firebase'],
		},

		{
			name: 'Dean Richards',
			imageName: 'deanrichards.png',
			blurb: 'Your looking at it!',
			link: 'http://dean-richards.uk',
			featured: true,
			category: ['mern', 'react', 'redux', 'firebase'],
		},
		{
			name: 'Instagram Clone',
			imageName: 'deanrichards.png',
			blurb:
				'A basic Instagram clone that runs off firebase and uses the firebase authentication API. It uses firebase snapshots to update chats when a user adds a new message',
			link: 'http://dean-richards.uk',
			featured: true,
			category: ['mern', 'react', 'redux', 'firebase'],
		},
	]);

	const [currentProject, setCurrentProject] = useState(projects[0]);

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				currentProject,
				setCurrentProject,
			}}>
			{children}
		</ProjectsContext.Provider>
	);
};

export default ProjectsContextProvider;
