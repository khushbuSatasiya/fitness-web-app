import { FC } from 'react';

import CountUp from 'react-countup';
import Lottie from 'lottie-react';

import { getHeartRateCondition } from 'shared/util/utility';

import heartRateJson from '../json/heartbeat.json.json';
import fitnessData from '../../fitness/json/fitness.json';

import swimming from '../../../assets/images/swimmer.png';
import durationImg from '../../../assets/images/duration.png';
import distanceImg from '../../../assets/images/distance.png';

import '../style/activity.scss';

const Swimming: FC = () => {
	const { activities } = fitnessData;
	const { name, duration, distance, heart_rate, laps } = activities[2];

	return (
		<>
			<h3 className='no--margin mt--40 text--center text--blue-400'>{name}</h3>
			<div className='height--full-viewport activity flex flex--column'>
				<div className='flex flex--wrap  justify-content--between'>
					<div className='activity-detail__box flex flex--row justify-content--around align-items--center border-radius--xxl'>
						<div className='flex flex--column'>
							<p className='font-size--22 line-height--28 font--light text--light-blue'>Laps taken</p>
							<h6 className='no--margin mt--15 font-size--30 line-height--28 font--medium'>
								<CountUp end={laps as number} duration={1} className='font-size--30' />
							</h6>
						</div>
						<div className='steps-image '>
							<img src={swimming} alt='steps-img' className='image' />
						</div>
					</div>
					<div className='activity-detail__box flex flex--row justify-content--around align-items--center border-radius--xxl'>
						<div className='flex flex--column'>
							<p className='font-size--22 line-height--28 font--light text--light-blue'>Total Time</p>
							<h6 className='no--margin mt--15 font-size--30 line-height--28 font--medium'>
								{duration}
								<span>min</span>
							</h6>
						</div>
						<div className='steps-image'>
							<img src={durationImg} alt='duration-img' className='image' />
						</div>
					</div>
					<div className='activity-detail__box flex flex--row justify-content--around align-items--center border-radius--xxl'>
						<div className='flex flex--column'>
							<p className='font-size--22 line-height--28 font--light text--light-blue'>Distance</p>
							<h6 className='no--margin mt--15 font-size--30 line-height--28 font--medium'>
								{distance}
								<span>km</span>
							</h6>
						</div>
						<div className='steps-image '>
							<img src={distanceImg} alt='distance-img' className='image' />
						</div>
					</div>
				</div>
				<div className='heart-rate  width--full activity-detail__box border-radius--xxl'>
					<div className='flex align-items--center'>
						<div className='heart-rate__lottie'>
							<Lottie animationData={heartRateJson} loop={true} />
						</div>
						<div className='flex flex--column'>
							<div className='flex flex--row heart-rate__content flex justify-content--between'>
								<div>
									<p className='font-size--22 line-height--28 font--light text--light-blue'>
										Avg Heart Rate
									</p>
									<h6 className='flex justify-content--end no--margin mt--15 font-size--30 line-height--28 font--medium'>
										<CountUp
											end={heart_rate.average}
											duration={1}
											className='font-size--30 text--red-300'
										/>
										<span>bpm</span>
									</h6>
								</div>
								<div>
									<p className='font-size--22 line-height--28 font--light text--light-blue'>
										Max Heart Rate
									</p>
									<h6 className='flex justify-content--end no--margin mt--15 font-size--30 line-height--28 font--medium'>
										<CountUp
											end={heart_rate.max}
											duration={1}
											className='font-size--30 text--red-300'
										/>
										<span>bpm</span>
									</h6>
								</div>
							</div>
							<div className='rate-text text--center mt--30'>
								<p className='font-size--lg line-height--28 font--medium text--yellow'>
									{getHeartRateCondition(heart_rate.average)}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Swimming;
