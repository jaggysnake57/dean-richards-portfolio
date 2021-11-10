import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = ({ setCurrentPage, currentPage }) => {
	const aboutRef = useRef();

	const aboutObserverOptions = {
		rootMargin: '0px 0px 50px 0px',
		threshold: 0.9,
	};

	const aboutObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(({ isIntersecting, target }) => {
			if (isIntersecting) {
				setCurrentPage('about');
			}
		});
	}, aboutObserverOptions);

	useEffect(() => {
		aboutObserver.observe(aboutRef.current);
	}, []);

	return (
		<div className="about" id="about" ref={aboutRef}>
			<div className="pageBackground">
				<p>ABOUT</p>
			</div>

			<div className="container">
				<h1>About</h1>
				<p>
					HI. My name is Dean, and I am a full stack developer, mainly
					in MERN and React, but I continue to grow my language and
					skills daily. I have spent the last 10 years raising my two
					daughters and coding when I can, (with two active young
					girls that is not all that often!). 2020 was the year for me
					to get back into work, oh boy did I pick a year! So instead
					of working I spent 2020 with my family and coding when I
					could, picking up more skills along the way.
				</p>

				<p>
					Before becoming a developer, I worked in the hospitality
					sector for just under 10 years mainly front facing, dealing
					with customers daily. I am extremely comfortable dealing
					with people, both client and team alike. After having my
					first child I stayed at home raising her and started a HNC
					computing course, this is where I discovered website
					development. After finishing the course, I started to learn
					web site development focusing on PHP. Suring this time I
					launched several sites that have since stopped operating.
					With the birth of my second child my attention was pulled
					away from development until the end of 2019, when I found
					more time to develop. I found myself needing to learn
					JavaScript and the node, express environment. I used sites
					like LinkedIn learning and Udemy to learn.
				</p>
				<p>
					I am currently freelance, but I am looking for a more stable
					income stream. If you have a project or are looking for an
					employee, get in touch <Link to="/contact">here</Link>
				</p>
			</div>
			{/* <Carousel currentPage={currentPage} /> */}
		</div>
	);
};

export default About;
