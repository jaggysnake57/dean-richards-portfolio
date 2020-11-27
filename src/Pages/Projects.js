import React, { useEffect, useState } from 'react';
import IndividualProject from '../Components/IndividualProject';
import ProjectsHome from '../Components/ProjectsHome';
//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';
import { projects } from '../data/projects';

const Projects = ({ setCurrentPage, setProjectName }) => {
	const [catagories, setCatagories] = useState({
		mern: [],
		react: [],
		redux: [],
		firebase: [],
	});

	useEffect(() => {
		document.body.classList.add('bodyBackground');
		setCurrentPage('projects');
		let cats = {};
		Object.entries(projects).map((project) => {
			project[1].category.map((tag) => {});
		});
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
			<div className="mainContent">
				{/* project component project as props */}

				{/* projects home */}
				<ProjectsHome setProjectName={setProjectName} />

				{/* individual project */}
				<IndividualProject />
			</div>
		</div>
	);
};

export default Projects;
