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
			<Link to="/" className={currentPage === 'home' && 'current'}>
				<RiHomeLine />
			</Link>
			<Link to="/about" className={currentPage === 'about' && 'current'}>
				<RiUser3Line />
			</Link>
			<Link
				to="/projects"
				className={currentPage === 'projects' && 'current'}>
				<BsCollection />
			</Link>
			<Link
				to="/contact"
				className={currentPage === 'contact' && 'current'}>
				<RiMailSendLine />
			</Link>
		</div>
	);
};

export default Navbar;
