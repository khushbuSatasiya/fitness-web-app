import { FC, useEffect, useState } from 'react';

import Fitness from './fitness';

import '../style/dashboard.scss';

const Dashboard: FC = () => {
	const [greeting, setGreeting] = useState('');

	const getGreeting = () => {
		if (new Date().getHours() < 12) {
			setGreeting('Good morning');
		} else if (new Date().getHours() < 18) {
			setGreeting('Good afternoon');
		} else {
			setGreeting('Good evening');
		}
	};

	useEffect(() => {
		getGreeting();
	}, []);

	return (
		<div className='flex flex--column p--20'>
			<h2 className='text--center mt--15'>Hello, {greeting}</h2>
			<Fitness />
		</div>
	);
};

export default Dashboard;
