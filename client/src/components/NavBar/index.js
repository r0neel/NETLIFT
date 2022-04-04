import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faCalendarDays,
	faChartLine,
	faGear,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
	return (
		<>
			<nav className="bg-nl-lightblue h-73 flex justify-center sticky inset-x-0 bottom-0">
				<div id="links" className="justify-center flex space-x-10 pt-3">
					<div id="home-link">
						{/* <Link to='/home' active></Link> */}
						<Link to="home" className="flex flex-col items-center">
							<FontAwesomeIcon
								className="w-8 h-8 active:nl-navblue"
								icon={faHouse}
							/>
							<p className="text-xs pt-1">Home</p>
						</Link>
					</div>
					<div id="history-link" >
						<Link to="history" className="flex flex-col items-center">
							<FontAwesomeIcon className="w-8 h-8 " icon={faCalendarDays} />
							<p className="text-xs pt-1">History</p>
						</Link>
					</div>
					<div id="progress-link">
						<Link to="progress" className="flex flex-col items-center">
							<FontAwesomeIcon className="w-8 h-8" icon={faChartLine} />
							<p className="text-xs pt-1">Progress</p>
						</Link>
					</div>
					<div id="settings-link">
						<Link to="settings" className="flex flex-col items-center">
							<FontAwesomeIcon className="w-8 h-8" icon={faGear} />
							<p className="text-xs pt-1">Settings</p>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
export default NavBar;
