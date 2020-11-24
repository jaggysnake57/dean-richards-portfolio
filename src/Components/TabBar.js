import React from 'react';

import '../css/Components/TabBar/Main.css';
import '../css/Components/TabBar/Responsive.css';

import { BsCollection } from 'react-icons/bs';
import { RiUser3Line, RiHomeLine, RiMailSendLine } from 'react-icons/ri';

const TabBar = ({ currentPage }) => {
	const icons = {
		home: RiHomeLine,
		about: RiUser3Line,
		projects: BsCollection,
		contact: RiMailSendLine,
	};
	const TabIcon = icons[currentPage];
	return (
		<div className="tabBar">
			<div className="pageTab active">
				<TabIcon />
				<h3>{currentPage}</h3>
			</div>
		</div>
	);
};

export default TabBar;
