import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	ArcElement,
	Tooltip
} from 'chart.js';

interface IProps {
	calories: number;
}

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Tooltip);
const DoughnutChart: React.FC<IProps> = ({ calories }) => {
	const chartRef = useRef<any>(null);

	useEffect(() => {
		if (chartRef && chartRef.current) {
			chartRef.current?.chartInstance.destroy();
		}
	}, []);

	const data = {
		labels: ['Calories burned', 'remaining calories'],
		datasets: [
			{
				label: '',
				data: [calories, 1000 - calories],
				borderColor: ['#ffbd2e'],
				borderWidth: 1,
				backgroundColor: ['#ffbd2e', '#fffffff'],
				hoverOffset: 4
			}
		]
	};

	const chartOptions: any = {
		cutout: 70,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					usePointStyle: true,
					color: '#210873',
					font: {
						size: 15,
						family: 'Sofia-pro',
						weight: '700'
					},
					padding: 50
				}
			},
			elements: {
				arc: {
					borderWidth: 0
				}
			},
			animation: true,
			tooltip: {
				xAlign: 'right',
				backgroundColor: '#000025',
				bodyColor: 'white',
				titleColor: 'white',

				bodyFont: {
					size: 16,
					weight: '700',
					family: 'Sofia-pro'
				},
				display: true,
				callbacks: {
					title: function (context: any) {
						const label = context[0].label || '';
						// const value = context.parsed || 0;
						return `${label}`;
					}
				},
				displayColors: false,
				titleMarginBottom: 20,
				boxHeight: 50,
				padding: 15
			}
		}
	};

	return (
		<div className='doughnut-chart display-flex-center'>
			<Doughnut id={`${Math.random()}`} data={data} options={chartOptions} />
		</div>
	);
};

export default DoughnutChart;
