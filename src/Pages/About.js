import React, { useEffect } from 'react';
// css
import '../css/Pages/About/Main.css';
import '../css/Pages/About/Responsive.css';

import me from '../images/dummy.jpg';

const About = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage('about');
	}, []);

	return (
		<div className="about">
			<div className="pageBackground">
				<p>ABOUT</p>
			</div>

			<div className="container">
				<h1>About</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam cum qui harum quis commodi. Neque delectus
					perferendis, eveniet vitae reprehenderit facilis voluptatum
					at veritatis dicta eligendi. Impedit magni ullam sint. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					cum qui harum quis commodi. Neque delectus perferendis,
					eveniet vitae reprehenderit facilis voluptatum at veritatis
					dicta eligendi. Impedit magni ullam sint.
				</p>
			</div>
		</div>
	);
};

export default About;
