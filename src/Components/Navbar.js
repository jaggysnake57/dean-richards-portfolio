//react
import React from 'react';
//icons
import { Link } from 'react-router-dom';

import { BsCollection } from 'react-icons/bs';
import { RiUser3Line, RiHomeLine, RiMailSendLine } from 'react-icons/ri';

//css
import '../css/Components/Navbar/Main.css';
import '../css/Components/Navbar/Responsive.css';

const Navbar = ({ currentPage }) => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="brand">
					<Link
						to="/"
						className={
							currentPage === 'home' ? 'current' : 'undefined'
						}>
						Dean Richards
					</Link>
				</div>
				<nav>
					<Link
						to="/"
						className={
							currentPage === 'home' ? 'current' : 'undefined'
						}>
						Home
					</Link>
					<Link
						to="/about"
						className={
							currentPage === 'about' ? 'current' : 'undefined'
						}>
						About
					</Link>
					<Link
						to="/projects"
						className={
							currentPage === 'projects' ? 'current' : 'undefined'
						}>
						Projects
					</Link>
					<Link
						to="/contact"
						className={
							currentPage === 'contact' ? 'current' : 'undefined'
						}>
						Contact
					</Link>
					<div className="burger">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
