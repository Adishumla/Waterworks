'use client';
import Utils from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartData from '@/components/ChartData';

const car = ChartData();

car.then((carData) => {
	const chartData = carData.chartData;
	const carLat = chartData.map((item: any) => item.Lat);
	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [carLat],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}
		]
	};
	return data;
});

Chart.register(...registerables);

//create a new chart with Bar from react-chartjs-2

const options = {
	scales: {
		y: {
			beginAtZero: true
		}
	}
};

export default function Barchart() {
	return (
		<div>
			<p>bar-chart</p>
			<Bar data={car} options={options} />
		</div>
	);
}
