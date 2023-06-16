import { FC } from 'react';

import fitnessData from '../json/fitness.json';

import VerticalBarChart from './verticalBarChart';
import profile from '../../../assets/images/profile.jpg';

const Profile: FC = () => {
	const { user, activities } = fitnessData;
	return (
		<>
			<div className='profile-container'>
				<div className='profile-wrapper display-flex-center flex--column mt--15 '>
					<div className='profile-img border-radius--half'>
						<img src={profile} alt='profile-img' className='image border-radius--half' />
					</div>
					<h5 className='mt--15 font--regular line-height--20'>{user.name}</h5>

					<div className='width--full flex justify-content--center mt--50'>
						<div className='detail'>
							<h4 className='no--margin font-size--22 mb--15'>{user.age}</h4>
							<p>Age</p>
						</div>
						<div className='detail'>
							<h4 className='no--margin font-size--22 mb--15'>{user.weight}kg</h4>
							<p>Weight</p>
						</div>
						<div className='detail'>
							<h4 className='no--margin font-size--22 mb--15'>{user.height}cm</h4>
							<p>Height</p>
						</div>
					</div>

					<div>
						<VerticalBarChart activities={activities} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
