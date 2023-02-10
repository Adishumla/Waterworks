'use client';
import Utils from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import ChartData from '@/components/ChartData';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


async function displayData() {
	const url = 'http://data.goteborg.se/RiverService/v1.1/MeasureSites/4a9a0d23-8e98-4e64-81ac-3e01fed82bee?format=Json';
	const response = await Promise.resolve(fetch(url));
	const chartData = await response.json();
	return (
		chartData
	);
}

const importData = displayData();

console.log(importData);

//create a new chart with Bar from react-chartjs-2
const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
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

const options = {
	scales: {
		y: {
			beginAtZero: true
		}
	}
};

export default function ChartDisplay() {
	return (
		<div>
			<p>bar-chart</p>
			<Line data={data} options={options} />
		</div>
	);
}
