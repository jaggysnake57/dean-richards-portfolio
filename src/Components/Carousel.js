import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectsContext } from '../contexts/ProjectsContext';
import '../css/Components/Carousel/Main.css';
import '../css/Components/Carousel/responsive.css';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import Whirligig from 'react-whirligig';

const Carousel = ({ currentPage }) => {
	const { projects, currentProject, setCurrentProject } = useContext(
		ProjectsContext
	);
	const [windowSize, setWindowSize] = useState(0);
	const [imageNumber, setImageNumber] = useState(1);

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
	const handleResize = (e) => {
		setWindowSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		setWindowSize(window.innerWidth);
	}, []);

	useEffect(() => {
		if (windowSize > 1500) {
			setImageNumber(4);
		} else if (windowSize <= 1500 && windowSize > 930) {
			setImageNumber(3);
		} else if (windowSize <= 930 && windowSize > 760) {
			setImageNumber(2);
		} else if (windowSize <= 760 && windowSize > 0) {
			setImageNumber(1);
		}
	}, [windowSize]);

	let whirligig;
	const next = () => whirligig.next();
	const prev = () => whirligig.prev();
	return (
		<div className="carousel">
			<div className="container">
				<div className="leftArrow arrows " onClick={prev}>
					<AiOutlineLeft />
				</div>
				<Whirligig
					visibleSlides={imageNumber}
					className="carouselBody"
					preventScroll={true}
					infinite={true}
					gutter="3rem"
					ref={(_whirligigInstance) => {
						whirligig = _whirligigInstance;
					}}>
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
				</Whirligig>
				<div className="rightArrow arrows " onClick={next}>
					<AiOutlineRight />
				</div>
			</div>
		</div>
	);
};

export default Carousel;
