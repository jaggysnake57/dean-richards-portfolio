// react
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// images
import HTMLIcon from '../../images/HTML.png';
import reactIcon from '../../images/react.png';
import javascriptIcon from '../../images/javascript.png';
import sassIcon from '../../images/Sass.png';
import reduxIcon from '../../images/redux.png';

const Home = ({ setCurrentPage }) => {
	const homeRef = useRef();

	const homeObserverOptions = {
		rootMargin: '0px 0px 50px 0px',
		threshold: 0.9,
	};

	const homeObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(({ isIntersecting, target }) => {
			if (isIntersecting) {
				setCurrentPage('home');
			}
		});
	}, homeObserverOptions);

	useEffect(() => {
		homeObserver.observe(homeRef.current);
	}, []);

	return (
		<div id="home" className="home" ref={homeRef}>
			<div className="container">
				<p className="tag-fragment">{'<>'}</p>
				<div className="tab">
					<p className="component">
						<span className="tag-fragment">{'<'}</span>DeanRichards
					</p>
					{/* tab */}
					<div className="tab">
						<p className="attribute ">
							role=<span className="bracket-2">{'{'}</span>
							developer
							<span className="bracket-2">{'}'}</span>
						</p>
						<p className="attribute ">
							tags=<span className="bracket-2">{'{'}</span>
						</p>
						<div className=" attribute tab object">
							<p>HTML5: </p>
							<img src={HTMLIcon} alt="mongo icon"></img>
							<p>Sass:</p>
							<img src={sassIcon} alt="" />
							<p>JavaScript:</p>
							<img src={javascriptIcon} alt="node icon" />
							<p>React:</p>
							<img src={reactIcon} alt="react icon" />
							<p>Redux:</p>
							<img src={reduxIcon} alt=" redux icon" />
						</div>
						<p className="bracket-2 ">{'}'}</p>
						<p className="attribute ">
							available=<span className="bracket-2">{'{'}</span>
							<span className="bool">true</span>
							<span className="bracket-2">{'}'}</span>
						</p>
						<p className="attribute ">
							onClick=<span className="bracket-2">{'{'}</span>
							<span className="bracket-3">{'()'}</span>
							<span className="bool">{' => '}</span>
							<span>
								{' '}
								<a href="#about" className="function">
									aboutMe
									<span className="bracket-3">{'()'}</span>
								</a>
							</span>
							<span className="bracket-2">{'}'}</span>
							<span className="tag-fragment">{' />'}</span>
						</p>
					</div>
				</div>
				<p className="tag-fragment">{'</>'}</p>
				<p className="cursor">|</p>
			</div>
		</div>
	);
};

export default Home;
