import React, { useEffect } from 'react';
//css
import '../css/Pages/Projects/Main.css';
import '../css/Pages/Projects/Responsive.css';

const Projects = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage('projects');
	}, []);
	return (
		<div>
			<h2>Projects page</h2>
		</div>
	);
};

export default Projects;
