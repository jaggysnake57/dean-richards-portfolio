//react
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../contexts/ProjectsContext';

// database
import { auth } from '../firebase';

//icons
import { AiOutlineClose } from 'react-icons/ai';

//css
import '../css/Components/Navbar/Main.css';
import '../css/Components/Navbar/Responsive.css';

const Navbar = ({ currentPage }) => {
	//context
	const [{ userId }, dispatch] = useStateValue();

	//state
	const [navMenuOpen, setNavMenuOpen] = useState(false);

	//hooks

	//functions
	const handleLogOut = () => {
		auth.signOut();
		console.log('log out clicked');
	};

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
				<nav className={navMenuOpen ? 'open' : null}>
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
					{userId && <p onClick={() => handleLogOut()}>Sign out</p>}
				</nav>
				<div
					className="burger"
					onClick={() => setNavMenuOpen(!navMenuOpen)}>
					<div></div>
					<div></div>
					<div></div>
					<AiOutlineClose />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
