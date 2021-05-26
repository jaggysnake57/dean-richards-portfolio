import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';

import '../css/Components/ProjectCard/Main.css';
import { useStateValue } from '../contexts/ProjectsContext';

const ProjectCard = ({ openId, handleToggleDetails, projectId }) => {
	const [{ isAdmin, userId }, dispatch] = useStateValue();
	return (
		<div className="project-card">
			<div className="project-card__image">
				<img src="https://imgur.com/hG8F4Q2.png" alt="" />
			</div>

			{isAdmin && userId && (
				<div className="project-card__admin-buttons">
					<button className="btn">Edit</button>
					<button className="btn danger">Delete</button>
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
				<h2 className="project-card__title">Room</h2>
				<p className="project-card__blurb">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Commodi nesciunt laborum debitis voluptatibus quis quo
					cupiditate magni, eius cumque numquam.
				</p>
				<div className="project-card__links">
					<a href="#" className="project-card__link button-link">
						Visit the site <FiExternalLink />
					</a>
					<a href="#" className="project-card__link button-link">
						See the code <FiGithub />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
