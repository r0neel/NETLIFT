import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faChartLine, faGear  } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
	return (
		<>
			<nav className="">
        <div id="home-link">
          <a href="#">
            <FontAwesomeIcon className='w-8 h-8' icon={faHouse} />
            <p className='text-xs'>Home</p>
          </a>
        </div>
        <div id="history-link">
          <a href="#">
            <FontAwesomeIcon className='w-8 h-8' icon={faCalendarDays} />
            <p className='text-xs'>History</p>
          </a>
        </div>
        <div id="progress-link">
          <a href="#">
            <FontAwesomeIcon className='w-8 h-8' icon={faChartLine} />
            <p className='text-xs'>Progress</p>
          </a>
        </div>
        <div id="settings-link">
          <a href="#">
            <FontAwesomeIcon className='w-8 h-8' icon={faGear} />
            <p className='text-xs'>Settings</p>
          </a>
        </div>
			</nav>
		</>
	);
};
export default NavBar;
