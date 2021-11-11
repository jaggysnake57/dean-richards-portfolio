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
			<div
				className={`pageBackground ${
					currentPage === 'about' && 'pageBackground--active'
				}`}>
				<p>ABOUT</p>
			</div>

			<div className="container">
				<h1>About</h1>
				<p>
					HI. My name is Dean Richards, and I am a frontend developer.
					My core strengths are in HTML, CSS JavaScript and React and
					I have experience with node.js, express, firebase, PHP and
					git.
				</p>

				<p>
					I have spent the last 10 years raising my two daughters and
					coding when I can, (with two active young girls that is not
					all that often!). 2020 was the year for me to get back into
					work, oh boy did I pick a year! So instead of working I
					spent 2020 with my family and coding when I could, picking
					up more skills along the way.
				</p>
				<p>
					After having my first child I stayed at home raising her and
					started a HNC computing course, this is where I discovered
					website development. After finishing the course, I started
					to learn web site development focusing on PHP. During this
					time, I worked on a website for a local start-up.
					Unfortunately, this site was never launched (they went with
					another developer), that took a toll on my confidence and
					with the birth of my second child my attention was pulled
					away from development until the end of 2019.
				</p>

				<p>
					I moved away from PHP and focused JavaScript and the node,
					express environment. I used sites like LinkedIn learning and
					Udemy to learn the basics and moved onto React after some
					more research into the current market. I have completed
					several projects, some of which are below in the{' '}
					<a href="#projects">projects</a> section.
				</p>

				<p>
					After more than 10 years out of work and recently turning
					40, I am keen to start a new journey and I want to catch up
					on time missed. My goal is to achieve a senior role as soon
					as I can, and I am willing to put the work in to do so.
				</p>
			</div>
			{/* <Carousel currentPage={currentPage} /> */}
		</div>
	);
};

export default About;
