import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import Dashboard from 'features/fitness/component/dashboard';
import Running from 'features/activity/component/running';
import Cycling from 'features/activity/component/cycling';
import Yoga from 'features/activity/component/yoga';
import Swimming from 'features/activity/component/swimming';
import Hiking from 'features/activity/component/hiking';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/activity/running' element={<Running />} />
				<Route path='/activity/cycling' element={<Cycling />} />
				<Route path='/activity/Strength Training' element={<Yoga />} />
				<Route path='/activity/swimming' element={<Swimming />} />
				<Route path='/activity/hiking' element={<Hiking />} />
			</Routes>
		</Layout>
	);
};

export default App;
