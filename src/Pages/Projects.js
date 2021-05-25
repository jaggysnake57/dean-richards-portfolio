//react
import { useEffect, useState } from 'react';

//firebase
import { db } from '../firebase';

//icons
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';

//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';
import { useStateValue } from '../contexts/ProjectsContext';
import ProjectCard from '../Components/ProjectCard';

const Projects = ({ setCurrentPage, currentPage }) => {
	const [{ isAdmin, userId, projects }, dispatch] = useStateValue();
	const [openId, setOpenId] = useState('');

	const handleToggleDetails = (id) => {
		// set state id
		if (openId === id) {
			setOpenId('');
		} else {
			setOpenId(id);
		}
	};

	useEffect(() => {
		setCurrentPage('projects');
	}, []);

	useEffect(() => {
		const getProjects = async () => {
			try {
				// get all products
				const data = await db.collection('projects').get();
				let projects = [];
				data.docs.map((project) => {
					if (!project.data().featured) {
						projects.push(project.data());
					} else {
						dispatch({
							type: 'SET_FEATURED',
							project: project.data(),
						});
					}
				});

				// add to state
				dispatch({
					type: 'SET_PROJECTS',
					projects,
				});
			} catch (error) {
				//handel the errors
				console.log('projects error', error);
			}
		};

		getProjects();
	}, []);

	return (
		<div className="projects">
			<div className="pageBackground">
				<p>PROJECTS</p>
			</div>
			<div className="container">
				<section className="hero">
					<div
						className="hero__image"
						style={{
							backgroundImage:
								'url(https://imgur.com/CB3ofoh.png)',
						}}></div>

					<div className="hero__mask"></div>

					<div className="hero__content">
						<h1 className="hero__title">Manage landing</h1>
						<p className="hero__blurb">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque viverra lobortis felis a commodo.
							Aliquam a commodo ante. Cras id ultrices nunc, in
							laoreet metus. Aenean vel purus a ante.
						</p>
						<div className="hero__linksContainer">
							<a href="#" className="hero__link button-link">
								Visit the site <FiExternalLink />
							</a>
							<a href="#" className="hero__link button-link">
								See the code <FiGithub />
							</a>
						</div>
					</div>
				</section>

				<section className="projects-main">
					<ProjectCard
						openId={openId}
						handleToggleDetails={handleToggleDetails}
						projectId={1}
					/>
					<ProjectCard
						openId={openId}
						handleToggleDetails={handleToggleDetails}
						projectId={2}
					/>
					<ProjectCard
						openId={openId}
						handleToggleDetails={handleToggleDetails}
						projectId={3}
					/>
					<ProjectCard
						openId={openId}
						handleToggleDetails={handleToggleDetails}
						projectId={4}
					/>
					<ProjectCard
						openId={openId}
						handleToggleDetails={handleToggleDetails}
						projectId={5}
					/>
					<ProjectCard
						openId={openId}
						handleToggleDetails={handleToggleDetails}
						projectId={6}
					/>
					<ProjectCard
						openId={openId}
						handleToggleDetails={handleToggleDetails}
						projectId={7}
					/>
				</section>
			</div>
		</div>
	);
};

export default Projects;
