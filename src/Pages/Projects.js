import React, { useContext, useEffect, useState } from 'react';
import IndividualProject from '../Components/IndividualProject';
import ProjectsHome from '../Components/ProjectsHome';
//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';
import { projects } from '../data/projects';
import { RiFolderFill, RiFile3Fill } from 'react-icons/ri';
import { ProjectsContext } from '../contexts/ProjectsContext';
import Carousel from '../Components/Carousel';

const Projects = ({ setCurrentPage, currentPage }) => {
	const { projects, currentProject } = useContext(ProjectsContext);

	useEffect(() => {
		setCurrentPage('projects');
	}, []);
	return (
		<div className="projects">
			<div className="pageBackground">
				<p>PROJECTS</p>
			</div>
			<div className="container">
				<div className="projectContainer">
					<div className="projectInfo">
						<h1>{currentProject.name}</h1>
						<p>{currentProject.blurb}</p>

						<a href={currentProject.link}>Click Here To Visit</a>
					</div>
					<div className="projectImage">
						<img
							src={`${process.env.PUBLIC_URL}/${currentProject.imageName}`}
							alt=""
						/>
					</div>
				</div>
			</div>

			<Carousel currentPage={currentPage} />
		</div>
	);
};

export default Projects;
