import { useStateValue } from '../../contexts/ProjectsContext';
import { db } from '../../firebase';

import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';

const ProjectCard = ({
	openId,
	handleToggleDetails,
	projectId,
	project,
	setEditableProjectId,
	getProjects,
}) => {
	//context
	const [{ isAdmin, userId }, dispatch] = useStateValue();

	// destructed props
	const { name, imageUrl, websiteLink, gitHubLink, blurb } = project;

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

	console.log(project);

	return (
		<div className="project project--pull-left">
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
					<img src={imageUrl} alt="" />
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
