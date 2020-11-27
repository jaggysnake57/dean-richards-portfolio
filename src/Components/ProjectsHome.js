import React from 'react';
import '../css/Components/ProjectsHome/Main.css';
import '../css/Components/ProjectsHome/Responsive.css';
import { projects } from '../data/projects';

const ProjectsHome = ({ setProjectName }) => {
	return (
		<div className="projectsHome">
			<h1 className="component">
				<span className="tag-fragment">{'<'}</span>
				Featured Projects
				<span className="tag-fragment">{'>'}</span>
			</h1>

			<div className="projectsGrid">
				{Object.entries(projects).map((project) => {
					let { name, imageName, blurb, link, featured } = project[1];
					if (featured) {
						return (
							<div className="projectCard">
								<h2>{name}</h2>
								<div
									className="projectImage"
									style={{
										backgroundImage: `url(${process.env.PUBLIC_URL}/${imageName})`,
									}}></div>
								<p>{blurb}</p>
								<div className="projectLinks">
									<p onClick={() => setProjectName(name)}>
										<span className="tag-fragment">
											{'<'}
										</span>
										<span className="bool">See More</span>
										<span className="tag-fragment">
											{'>'}
										</span>
									</p>
									<a href={link}>
										<span className="tag-fragment">
											{'<'}
										</span>
										<span className="bool">
											Click Here to Visit
										</span>
										<span className="tag-fragment">
											{'>'}
										</span>
									</a>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default ProjectsHome;
