import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import '../css/Components/IndividualProject/Main.css';
import '../css/Components/IndividualProject/Responsive.css';

const IndividualProject = ({ projectName }) => {
	const [project, setProject] = useState({});

	useEffect(() => {
		const currentProject = projects.filter((project) => {
			if (project.name === projectName) {
				return project;
			}
		});
		setProject(currentProject[0]);
	}, [projectName]);

	return (
		<div className="individualProject">
			<img
				src={`${process.env.PUBLIC_URL}/${project?.imageName}`}
				alt="website screenshot"
			/>
			<div className="projectDetails">
				<h1 className="component">
					<span className="tag-fragment">{'<'}</span>
					{project?.name}
					<span className="tag-fragment">{'>'}</span>
				</h1>

				{/* tags */}
				<div className="tagsContainer">
					{project?.category?.map((tag) => (
						<p className="tag">{tag}</p>
					))}
				</div>
				{/* blurb */}
				<p className="blurb">{project?.blurb}</p>
				{/* link */}
				<a href={project?.link}>
					<span className="tag-fragment">{'<'}</span>
					<span className="bool">Click Here to Visit</span>
					<span className="tag-fragment">{'>'}</span>
				</a>
			</div>
		</div>
	);
};

export default IndividualProject;
