import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectsContext } from '../contexts/ProjectsContext';
import '../css/Components/Carousel/Main.css';
import '../css/Components/Carousel/responsive.css';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const Carousel = ({ currentPage }) => {
	const { projects, currentProject, setCurrentProject } = useContext(
		ProjectsContext
	);

	let history = useHistory();

	const changeProject = (newProject) => {
		let nextP;
		if (currentProject !== newProject) {
			projects.map((p) => {
				if (p.name === newProject) {
					nextP = p;
				}
			});

			setCurrentProject(nextP);
			console.log(currentPage);
			if (currentPage === 'about') {
				history.push('/projects');
			}
		}
	};
	return (
		<div className="carousel">
			<div className="container">
				<div className="leftArrow arrows ">
					<AiOutlineLeft />
				</div>
				<div className="carouselBody">
					{projects.map((project) => (
						<img
							className={
								currentProject.name === project.name
									? 'selectedProject'
									: null
							}
							onClick={() => changeProject(project.name)}
							src={`${process.env.PUBLIC_URL}/${project.imageName}`}
							alt=""
						/>
					))}
				</div>
				<div className="rightArrow arrows ">
					<AiOutlineRight />
				</div>
			</div>
		</div>
	);
};

export default Carousel;
