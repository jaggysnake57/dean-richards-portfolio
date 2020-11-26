import React, { useEffect } from 'react';
//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';

const Projects = ({ setCurrentPage, setProjectName }) => {
	// state = project name -prop- from App.js

	// state = projects -useState- populate from projects folder

	useEffect(() => {
		document.body.classList.add('bodyBackground');
		setCurrentPage('projects');
	}, []);
	return (
		<div className="projects">
			{/* 
				projects side bar 
					title
					list of area as folders (MERN, React UI ETC)
					list of projects as files in the relevant folders
			*/}
			<div className="sidebar">
				<button onClick={() => setProjectName('project name')}>
					projectName
				</button>
				<button onClick={() => setProjectName('project name 4')}>
					projectName 4
				</button>
				<button onClick={() => setProjectName('project name 3')}>
					projectName 3
				</button>
				<button onClick={() => setProjectName('project name 1')}>
					projectName 1
				</button>
			</div>

			{/* project component project as props */}

			<h2>Projects page</h2>
		</div>
	);
};

export default Projects;
