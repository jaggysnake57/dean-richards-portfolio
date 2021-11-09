//react
import { useEffect, useState } from 'react';
import { useStateValue } from '../contexts/ProjectsContext';

//firebase
import { db } from '../firebase';

// components
import ProjectCard from '../Components/ProjectCard';
import AdminPanel from '../Components/AdminPanel';

//icons
import { FiExternalLink, FiGithub } from 'react-icons/fi';

//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';

const Projects = ({ setCurrentPage, currentPage }) => {
	//context
	const [{ isAdmin, userId, projects, featuredProject }, dispatch] =
		useStateValue();

	// state
	const [openId, setOpenId] = useState('');
	const [editableProjectId, setEditableProjectId] = useState('');

	// functions
	const handleToggleDetails = (id) => {
		// set state id
		if (openId === id) {
			setOpenId('');
		} else {
			setOpenId(id);
		}
	};

	const getProjects = async () => {
		try {
			const data = await db.collection('projects').get();
			let projects = [];
			data.docs.map((project) => {
				if (!project.data().featured) {
					projects.push({
						...project.data(),
						id: project.id,
					});
				} else {
					dispatch({
						type: 'SET_FEATURED',
						project: project.data(),
					});
				}
			});
			dispatch({
				type: 'SET_PROJECTS',
				projects,
			});
		} catch (error) {
			//handel the errors
			console.log('projects error', error);
		}
	};

	//use effects

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<div className="projects">
			<div className="pageBackground">
				<p>PROJECTS</p>
			</div>
			<div className="container">
				{isAdmin && userId && (
					<AdminPanel
						editableProjectId={editableProjectId}
						setEditableProjectId={setEditableProjectId}
						getProjects={getProjects}
					/>
				)}
				<section className="hero">
					<div
						className="hero__image"
						style={{
							backgroundImage: `url(${featuredProject.imageUrl})`,
						}}></div>

					<div className="hero__mask"></div>

					<div className="hero__content">
						<h1 className="hero__title">{featuredProject.name}</h1>
						<p className="hero__blurb">{featuredProject.blurb}</p>
						<div className="hero__linksContainer">
							<a
								href={featuredProject.websiteLink}
								className="hero__link button-link">
								Visit the site <FiExternalLink />
							</a>
							<a
								href={featuredProject.gitHubLink}
								className="hero__link button-link">
								See the code <FiGithub />
							</a>
						</div>
					</div>
				</section>

				<section className="projects-main">
					{projects.map((project) => (
						<ProjectCard
							openId={openId}
							handleToggleDetails={handleToggleDetails}
							key={project.id}
							projectId={project.id}
							project={project}
							setEditableProjectId={setEditableProjectId}
							getProjects={getProjects}
						/>
					))}
				</section>
			</div>
		</div>
	);
};

export default Projects;
