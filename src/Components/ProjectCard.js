import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';

import '../css/Components/ProjectCard/Main.css';
import { useStateValue } from '../contexts/ProjectsContext';
import { useEffect } from 'react';
import { db } from '../firebase';

const ProjectCard = ({
	openId,
	handleToggleDetails,
	projectId,
	project,
	setEditableProjectId,
	getProjects,
}) => {
	const [{ isAdmin, userId }, dispatch] = useStateValue();
	const { name, imageUrl, websiteLink, gitHubLink, blurb } = project;

	const handleDeleteProject = (id, event) => {
		event.preventDefault();

		const conformation = window.confirm('are you sure');
		if (conformation) {
			try {
				db.collection('projects').doc(id).delete();
				getProjects();
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="project-card">
			<div
				className="project-card__image"
				style={{ backgroundImage: `url(${imageUrl})` }}>
				{/* <img src={imageUrl} alt="" /> */}
			</div>

			{isAdmin && userId && (
				<div className="project-card__admin-buttons">
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

			<div
				className={`project-card__show-details ${
					openId === projectId ? 'details-open' : 'details-closed'
				}`}
				onClick={() => handleToggleDetails(projectId)}>
				{openId === projectId ? <RiCloseFill /> : <BsBoxArrowLeft />}
			</div>

			<div className="project-card__details">
				<h2 className="project-card__title">{name}</h2>
				<p className="project-card__blurb">{blurb}</p>
				<div className="project-card__links">
					<a
						href={websiteLink}
						className="project-card__link button-link">
						Visit the site <FiExternalLink />
					</a>
					<a
						href={gitHubLink}
						className="project-card__link button-link">
						See the code <FiGithub />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
