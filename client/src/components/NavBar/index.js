import React from 'react';
// import { Link } from 'react-dom';
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
			<nav className="bg-nl-lightblue h-73 flex justify-center sticky  items-start inset-x-0 bottom-0">
				<div id="links" className="justify-center flex space-x-10 pt-3">
					<div
						id="home-link"
						className="flex items-center"
					>
            {/* <Link to='/home' active></Link> */}
						<a href="/home" className='active:bg-violet-600 '>
							<FontAwesomeIcon className="w-8 h-8 active:nl-navblue" icon={faHouse} />
							<p className="text-xs">Home</p>
						</a>
					</div>
					<div id="history-link" className="flex justify-items-center">
						<a href="/history">
							<FontAwesomeIcon className="w-8 h-8" icon={faCalendarDays} />
							<p className="text-xs">History</p>
						</a>
					</div>
					<div id="progress-link" className='align-self-center'>
						<a href="/progress">
							<FontAwesomeIcon className="w-8 h-8" icon={faChartLine} />
							<p className="text-xs">Progress</p>
						</a>
					</div>
					<div id="settings-link">
						<a href="/settings">
							<FontAwesomeIcon className="w-8 h-8" icon={faGear} />
							<p className="text-xs">Settings</p>
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
export default NavBar;
