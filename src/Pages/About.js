import React, { useEffect } from 'react';
// css
import '../css/Pages/About/Main.css';
import '../css/Pages/About/Responsive.css';

import me from '../images/dummy.jpg';

const About = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage('about');
	}, []);

	const openTag = (tagName) => {
		return (
			<>
				<span className="tag-fragment">{'<'}</span>
				<span className="bool">{tagName}</span>
				<span className="tag-fragment">{'>'}</span>
			</>
		);
	};
	const closeTag = (tagName) => {
		return (
			<>
				<span className="tag-fragment">{'<'}</span>
				<span className="bool">{tagName}</span>
				<span className="tag-fragment">{'/>'}</span>
			</>
		);
	};

	return (
		<div className="about">
			<div className="mainContent">
				<h1 className="component">
					<span className="tag-fragment">{'<'}</span>About
					<span className="tag-fragment">{' />'}</span>
				</h1>
				<div className="tab">
					<h2>
						{openTag('h1')}Dean Richards{closeTag('h1')}
					</h2>
					<br />
					<p>
						{openTag('p')}
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Saepe vitae laudantium a velit aliquid voluptatibus
						dignissimos deserunt, odio architecto qui explicabo
						itaque, tempore eveniet maxime sed
						spernatur!Accusantium, sapiente quasi. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Saepe vitae
						laudantium a velit aliquid voluptatibus dignissimos
						deserunt, odio architecto qui explicabo itaque, tempore
						eveniet maxime sed spernatur!Accusantium, sapiente
						quasi.
						{closeTag('p')}
					</p>
					<br />
					<h3>
						{openTag('h3')}My Skills{closeTag('h3')}
					</h3>
					<br />
					<ul>
						{openTag('ul')}
						<div className="tab">
							<p>
								{openTag('li')}
								MongoDB
								{closeTag('li')}
							</p>
							<p>
								{openTag('li')}
								Express
								{closeTag('li')}
							</p>
							<p>
								{openTag('li')}
								React
								{closeTag('li')}
							</p>
							<p>
								{openTag('li')}
								Node.js
								{closeTag('li')}
							</p>
							<p>
								{openTag('li')}
								Firebase
								{closeTag('li')}
							</p>
							<p>
								{openTag('li')}
								Sass
								{closeTag('li')}
							</p>
						</div>
						{closeTag('ul')}
					</ul>
				</div>
			</div>
			<div className="myImage">
				<img src={me} alt="" />
			</div>
		</div>
	);
};

export default About;
