import React from 'react';
import { Link } from 'react-router-dom';
import '../css//Pages/NotFound/Main.css';
import '../css//Pages/NotFound/Responsive.css';

const NotFound = () => {
	return (
		<div className="notFound">
			<div className="centerBox">
				<h1>404</h1>
				<h2>whoops......</h2>
				<Link to="/">Go Home</Link>
			</div>
		</div>
	);
};

export default NotFound;
