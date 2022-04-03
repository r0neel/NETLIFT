import React from 'react';
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
			<nav className="bg-nl-lightblue px-8 h-73 flex">
        <div id='links' className='justify-items-center flex space-x-8'>
          <div id="home-link" className='flex justify-items-center'>
            <a href="#" >
                <FontAwesomeIcon className="w-8 h-8" icon={faHouse} />
                <p className="text-xs">Home</p>
            </a>
          </div>
          <div id="history-link" className='flex justify-items-center'>
            <a href="#">
              <FontAwesomeIcon className="w-8 h-8" icon={faCalendarDays} />
              <p className="text-xs">History</p>
            </a>
          </div>
          <div id="progress-link">
            <a href="#">
              <FontAwesomeIcon className="w-8 h-8" icon={faChartLine} />
              <p className="text-xs">Progress</p>
            </a>
          </div>
          <div id="settings-link">
            <a href="#">
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
