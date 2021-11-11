//react
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../contexts/ProjectsContext';

// database
import { auth } from '../../firebase';

//icons
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ currentPage, setCurrentPage }) => {
	//context
	const [{ userId }, dispatch] = useStateValue();

	//state
	const [navMenuOpen, setNavMenuOpen] = useState(false);

	//functions
	const handleLogOut = () => {
		auth.signOut();
	};

	return (
		<div className="navbar">
			<div className="container">
				<div className="brand">
					<a
						href="#home"
						className={
							currentPage === 'home' ? 'current' : 'undefined'
						}
						onClick={() => {
							setCurrentPage('home');
							setNavMenuOpen(false);
						}}>
						Dean Richards
					</a>
				</div>
				<nav className={navMenuOpen ? 'open' : null}>
					<a
						href="#home"
						className={
							currentPage === 'home' ? 'current' : 'undefined'
						}
						onClick={() => {
							setCurrentPage('home');
							setNavMenuOpen(false);
						}}>
						Home
					</a>
					<a
						href="#about"
						className={
							currentPage === 'about' ? 'current' : 'undefined'
						}
						onClick={() => {
							setCurrentPage('about');
							setNavMenuOpen(false);
						}}>
						About
					</a>
					<a
						href="#projects"
						className={
							currentPage === 'projects' ? 'current' : 'undefined'
						}
						onClick={() => {
							setCurrentPage('projects');
							setNavMenuOpen(false);
						}}>
						Projects
					</a>
					<a
						href="#contact"
						className={
							currentPage === 'contact' ? 'current' : 'undefined'
						}
						onClick={() => {
							setCurrentPage('contact');
							setNavMenuOpen(false);
						}}>
						Contact
					</a>
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
