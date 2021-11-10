import { useStateValue } from '../../contexts/ProjectsContext';
import { db } from '../../firebase';
import { gsap } from 'gsap';

import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProjectCard = ({
	isLeft,
	projectId,
	project,
	setEditableProjectId,
	getProjects,
}) => {
	//context
	const [{ isAdmin, userId }, dispatch] = useStateValue();

	//state
	const [imageLoaded, setImageLoaded] = useState(false);

	// destructed props
	const { name, imageUrl, websiteLink, gitHubLink, blurb } = project;

	// hooks
	const projectCardRef = useRef();

	// functions
	const handleDeleteProject = (id, event) => {
		event.preventDefault();
		const conformation = window.confirm('are you sure');
		if (conformation) {
			try {
				db.collection('projects').doc(id).delete();
				getProjects();
			} catch (error) {
				console.error(error);
			}
		}
	};

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	//gsap
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const startPos = isLeft ? '-100%' : '100%';
		const finishPos = isLeft ? '-10%' : '10%';
		if (imageLoaded) {
			ScrollTrigger.matchMedia({
				'(min-width: 40rem)': function () {
					gsap.fromTo(
						projectCardRef.current,
						{
							x: startPos,
						},
						{
							x: finishPos,
							duration: 2,
							scrollTrigger: {
								trigger: projectCardRef.current,

								scrub: 1,
								start: '0px bottom',
								end: '0px 55%',
							},
						}
					);
				},
				'(min-width: 2400px)': function () {
					gsap.fromTo(
						projectCardRef.current,
						{
							x: startPos,
						},
						{
							x: '0px',
							duration: 2,
							scrollTrigger: {
								trigger: projectCardRef.current,

								scrub: 1,
								start: '0px bottom',
								end: '0px 55%',
							},
						}
					);
				},
			});
		}
	}, [imageLoaded]);

	return (
		<div
			ref={projectCardRef}
			className={`project project--pull-${isLeft ? 'left' : 'right'} `}>
			{isAdmin && userId && (
				<div className="project__admin-buttons">
					<button
						className="btn"
						onClick={() => setEditableProjectId(projectId)}>
						Edit
					</button>
					<button
						className="btn danger"
						onClick={(e) => handleDeleteProject(projectId, e)}>
						Delete
					</button>
				</div>
			)}
			<div className="project__content">
				<div className="project__info">
					<h2>{name}</h2>
					<p>{blurb}</p>
					<div className="project__buttons-wrapper">
						<a
							href={websiteLink}
							className="btn btn-success"
							target="_blank"
							rel="noreferrer">
							Visit the site <FiExternalLink />
						</a>
						<a
							href={gitHubLink}
							className="btn btn-success"
							target="_blank"
							rel="noreferrer">
							See the code <FiGithub />
						</a>
						{isAdmin && userId && (
							<div className="project-card__admin-buttons">
								<button
									className="btn btn-success"
									onClick={() =>
										setEditableProjectId(projectId)
									}>
									Edit
								</button>
								<button
									className="btn danger"
									onClick={(e) =>
										handleDeleteProject(projectId, e)
									}>
									Delete
								</button>
							</div>
						)}
					</div>
				</div>
				<div className="project__image">
					<img src={imageUrl} alt="" onLoad={handleImageLoad} />
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
