import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import Fitness from 'features/fitness/fitness';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Fitness />} />
			</Routes>
		</Layout>
	);
};

export default App;
