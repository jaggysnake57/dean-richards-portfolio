//react
import { useEffect, useState } from 'react';
import { useStateValue } from '../../contexts/ProjectsContext';

//firebase
import { db } from '../../firebase';

// components
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import AdminPanel from '../../Components/AdminPanel/AdminPanel';

//icons
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = ({ setCurrentPage, currentPage }) => {
	//context
	const [{ isAdmin, userId, projects, featuredProject }, dispatch] =
		useStateValue();

	// state

	const [editableProjectId, setEditableProjectId] = useState('');

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
			console.log(projects);
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
				<h1>Projects</h1>
			</div>
			<div className="large-container">
				<section className="projects-main">
					{projects.map((project, i) => (
						<ProjectCard
							project={project}
							projectId={project.id}
							isLeft={i % 2 === 0 ? true : false}
						/>
					))}
				</section>
			</div>
		</div>
	);
};

export default Projects;
