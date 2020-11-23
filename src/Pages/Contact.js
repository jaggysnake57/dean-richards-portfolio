import React, { useEffect } from 'react';
//css
import '../css/Pages/Contact/Main.css';
import '../css/Pages/Contact/Responsive.css';

const Contact = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage('contact');
	}, []);
	return (
		<div>
			<h2>Contact page</h2>
		</div>
	);
};

export default Contact;
