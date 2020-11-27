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
		if (!projectNames.includes(projectName) && projectName !== '') {
			setProjectNames([...projectNames, projectName]);
		}
	}, [projectName]);

	useEffect(() => {
		if (!projectNames.includes(projectName) && projectNames.length) {
			setProjectName(projectNames[0]);
		}
	}, [projectNames]);

	const closeTab = (tabName) => {
		const remainingTabs = projectNames.filter((name) => {
			if (name !== tabName) {
				return name;
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
				<button
					type="button"
					key={name}
					onClick={() => setProjectName(name)}
					className={
						name === projectName ? 'pageTab active' : 'pageTab'
					}>
					<TabIcon />
					<h3>{name}</h3>
					<button onClick={() => closeTab(name)}>
						<RiCloseLine />
					</button>
				</button>
			))}
		</div>
	);
};

export default TabBar;
