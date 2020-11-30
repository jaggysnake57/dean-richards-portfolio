import React, { useEffect, useState } from 'react';

import '../css/Components/TabBar/Main.css';
import '../css/Components/TabBar/Responsive.css';

import { BsCollection } from 'react-icons/bs';
import {
	RiUser3Line,
	RiHomeLine,
	RiMailSendLine,
	RiCloseLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const TabBar = ({ currentPage, projectName, setProjectName }) => {
	const [projectNames, setProjectNames] = useState([]);

	const icons = {
		home: RiHomeLine,
		about: RiUser3Line,
		projects: BsCollection,
		contact: RiMailSendLine,
	};

	useEffect(() => {
		if (currentPage === 'projects') {
			if (!projectNames.includes(projectName) && projectName !== '') {
				setProjectNames([...projectNames, projectName]);
			}
		}
	}, [projectName]);

	useEffect(() => {
		if (currentPage === 'projects') {
			if (projectNames.length && !projectNames.includes(projectName)) {
				setProjectName(projectNames[0]);
			}
		} else {
			if (projectNames.length) {
				setProjectNames([]);
			}
		}
		if (!projectNames.length) {
			setProjectName('');
		}
	}, [projectNames, currentPage]);

	const closeTab = (tabName) => {
		const remainingTabs = projectNames.filter((name) => {
			if (name !== tabName) {
				return name;
			} else {
				return '';
			}
		});

		setProjectNames(remainingTabs);
	};

	const TabIcon = icons[currentPage];
	return (
		<div
			className={
				currentPage === 'projects' ? 'tabBar projectsOpen' : 'tabBar'
			}>
			<div className="pageTab active">
				<TabIcon />
				<h3 onClick={() => setProjectName('')}>{currentPage}</h3>
			</div>
			{projectNames?.map((name) => (
				<div
					key={name}
					className={
						name === projectName ? 'pageTab active' : 'pageTab'
					}>
					<div
						className="tabName"
						onClick={() => setProjectName(name)}>
						<TabIcon />
						<h3>{name}</h3>
					</div>
					<div onClick={() => closeTab(name)}>
						<RiCloseLine />
					</div>
				</div>
			))}
		</div>
	);
};

export default TabBar;
