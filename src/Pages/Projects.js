import React, { useEffect, useState } from 'react';
import IndividualProject from '../Components/IndividualProject';
import ProjectsHome from '../Components/ProjectsHome';
//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';
import { projects } from '../data/projects';
import { RiFolderFill, RiFile3Fill } from 'react-icons/ri';

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
		e.target.classList.toggle('folderOpen');
		e.target.nextSibling.classList.toggle('folderOpen');
	};

	return (
		<div className="projects">
			<div className="sidebar">
				<h2>My-Projects</h2>
				{Object.entries(catagories).map((category) => {
					let folder = (
						<div className="folder">
							<h3 onClick={(e) => openCategoryFolder(e)}>
								<RiFolderFill />
								{category[0]}
							</h3>
							<div className="projectTitles">
								{category[1].map((projectName) => (
									<div
										onClick={() =>
											setProjectName(projectName)
										}>
										<RiFile3Fill />
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
				{projectName === '' ? (
					<ProjectsHome setProjectName={setProjectName} />
				) : (
					<IndividualProject projectName={projectName} />
				)}
			</div>
		</div>
	);
};

export default Projects;
