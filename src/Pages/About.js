import React, { useEffect } from 'react';
// css
import '../css/Pages/About/Main.css';
import '../css/Pages/About/Responsive.css';

const About = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage('about');
	}, []);
	return (
		<div>
			<h2>about page</h2>
		</div>
	);
};

export default About;
