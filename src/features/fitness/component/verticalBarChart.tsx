import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	ArcElement,
	Tooltip,
	BarElement
} from 'chart.js';

interface IProps {
	activities: any;
}

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Tooltip, BarElement);

const VerticalBarChart: React.FC<IProps> = ({ activities }) => {
	const chartRef = useRef<any>(null);

	const duration = activities.map((data: any) => {
		return data.duration;
	});

	const activityName = activities.map((data: any) => {
		return data.name;
	});

	useEffect(() => {
		if (chartRef && chartRef.current) {
			chartRef.current?.chartInstance.destroy();
		}
	}, []);

	const data = {
		labels: activityName,
		datasets: [
			{
				axis: 'y',
				label: 'Duration',
				data: duration,
				barThickness: 20,
				fill: false,
				backgroundColor: [
					'#000025',
					'#d69820',
					'#000025',
					'#d69820',
					'#000025',
					'#d69820',
					'#000025',
					'#d69820'
				],
				borderRadius: 6
			}
		]
	};

	const chartOptions: any = {
		maintainAspectRatio: false,
		color: 'red',
		plugins: {
			animation: true,
			tooltip: {
				xAlign: 'right',
				backgroundColor: '#000025',
				bodyColor: 'white',
				titleColor: 'white',

				bodyFont: {
					size: 16,
					weight: '700',
					family: 'Sofia-pro',
					color: 'white'
				},
				display: true,
				callbacks: {
					// title: function (context: any) {
					// 	console.log(context, 'context');
					// 	const label = context[0].label || '';
					// 	return `${label} min`;
					// }
				},
				displayColors: false,
				titleMarginBottom: 20,
				boxHeight: 50,
				padding: 15
			}
		},
		scales: {
			x: {
				ticks: {
					color: 'white'
				}
			},
			y: {
				ticks: {
					color: 'white'
				}
			}
		}
	};

	return (
		<div className='bar-chart display-flex-center'>
			<Bar id={`${Math.random()}`} data={data} options={chartOptions} />
		</div>
	);
};

export default VerticalBarChart;
