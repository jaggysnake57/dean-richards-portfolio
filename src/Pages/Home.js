import React, { useEffect } from 'react';
//css
import '../css/Pages/Home/Main.css';
import '../css/Pages/Home/Responsive.css';

const Home = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage('home');
	}, []);
	return (
		<div>
			<h2>home page</h2>
		</div>
	);
};

export default Home;
