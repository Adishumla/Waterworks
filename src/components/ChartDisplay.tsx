'use client';
import React, { useState, useEffect } from 'react';
import Utils from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import ChartData from '@/components/ChartData';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
async function displayData() {
	const url =
		'https://data.goteborg.se/RiverService/v1.1/Measurements/4a9a0d23-8e98-4e64-81ac-3e01fed82bee/Agnesberg/Level/2022-01-01/2022-06-25?format=Json';
	const response = await fetch(url);
	const chartData = await response.json();
	const value = [];
	console.log(chartData[0]);

	for (const data of chartData) {
		value.push(data.Value);
	}
	console.log(value);

	const codes = [];
	for (const data of chartData) {
		codes.push(data.Code);
	}
	return { value, codes };
}

export default function ChartDisplay() {
	const [importData, setImportData] = useState<string[]>([]);
	const [importLat, setImportLat] = useState<string[]>([]);

	useEffect(() => {
		async function fetchData() {
			const codes = await displayData();
			setImportData(codes.codes);
			setImportLat(codes.value);
		}
		fetchData();
	}, []);
	let city = [];
	for (let i = 0; i < importData.length; i++) {
		city.push('');
	}

	//console.log(importData);
	const data = {
		labels: city,
		datasets: [
			{
				label: '# of Votes',
				data: importLat,
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

	return (
		<div>
			<p>bar-chart</p>
			<Line data={data} options={options} />
		</div>
	);
}
