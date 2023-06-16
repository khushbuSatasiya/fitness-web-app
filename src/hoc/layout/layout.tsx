import Profile from 'features/fitness/component/profile';
import SideNav from 'features/fitness/component/sideNav';
import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div id='wrapper'>
			<div id='page-wrapper' className='dashboard full--width  flex'>
				<div className='side-nave width--10 p--20 position--fixed '>
					<SideNav />
				</div>
				<div className='width--70 position--relative left--10'>{props.children}</div>
				<div className='profile width--20 p--10 bg--secondary p--20 position--fixed'>
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default Layout;
