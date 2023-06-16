import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import CountUp from 'react-countup';

import fitnessData from '../json/fitness.json';

import DoughnutChart from './doughnutChart';

const Fitness: FC = () => {
	const navigate = useNavigate();

	return (
		<div className='mt--80'>
			<div className='flex flex--wrap justify-content--evenly'>
				{fitnessData.activities.map((activity, index) => {
					const { name, calories_burned } = activity;
					return (
						<div
							className='activity-box border-radius--lg flex align-items--center flex--column p--10 cursor--pointer'
							key={index}
							onClick={() => navigate(`/activity/${name}`)}
						>
							<h6>{name}</h6>
							<div className='position--relative'>
								<CountUp
									end={calories_burned}
									className='font-size--30 calories no--margin position--absolute'
									duration={2}
								/>
								<DoughnutChart calories={calories_burned} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Fitness;
