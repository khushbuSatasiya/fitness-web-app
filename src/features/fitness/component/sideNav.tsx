import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import fitnessImage from 'assets/images/icons-fitness.png';

const SideNav: FC = () => {
	console.log(window.innerWidth, ';;');

	return (
		<div className='display-flex-center flex--column'>
			<div className='display-flex-center p--20'>
				<img src={fitnessImage} alt='fitness-image' />
			</div>
			<ul className='mt--65'>
				<NavLink to='/' className='d-flex side-menu-link text--white'>
					<li className=' link display-flex-center border-radius--lg'>
						<p className='nav-label font-size--xxl font--regular no-margin'>Dashboard</p>
					</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default SideNav;
