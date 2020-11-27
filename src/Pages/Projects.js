import React, { useEffect, useState } from 'react';
import IndividualProject from '../Components/IndividualProject';
import ProjectsHome from '../Components/ProjectsHome';
//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';
import { projects } from '../data/projects';

const Projects = ({ setCurrentPage, setProjectName, projectName }) => {
	const [catagories, setCatagories] = useState({});

	useEffect(() => {
		document.body.classList.add('bodyBackground');
		setCurrentPage('projects');
		let temporaryCatagories = {};
		projects.map((project) => {
			project.category.map((tag) => {
				if (temporaryCatagories.hasOwnProperty(tag)) {
					temporaryCatagories[tag].push(project.name);
				} else {
					temporaryCatagories[tag] = [project.name];
				}
			});
		});
		setCatagories(temporaryCatagories);
	}, []);

	const openCategoryFolder = (e) => {
		e.target.nextSibling.classList.toggle('folderOpen');
	};

	return (
		<div className="projects">
			<div className="sidebar">
				<h2>My-Projects</h2>
				{Object.entries(catagories).map((category) => {
					//loop through each catagory
					let folder = (
						<div className="folder">
							<h3 onClick={(e) => openCategoryFolder(e)}>
								{category[0]}
							</h3>
							<div className="projectTitles">
								{category[1].map((projectName) => (
									<div
										onClick={() =>
											setProjectName(projectName)
										}>
										{projectName}
									</div>
								))}
							</div>
						</div>
					);
					return folder;
				})}
			</div>
			<div className="mainContent">
				{/* project component project as props */}

				{/* projects home */}
				{projectName === '' && (
					<ProjectsHome setProjectName={setProjectName} />
				)}

				{/* individual project */}
				<IndividualProject projectName={projectName} />
			</div>
		</div>
	);
};

export default Projects;
