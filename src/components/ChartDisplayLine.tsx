'use client';
import React, { useState, useEffect } from 'react';
import Utils from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import ChartData from '@/components/ChartData';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
async function displayData(location: string, fromDate: string, toDate: string) {
	const url = `https://data.goteborg.se/RiverService/v1.1/Measurements/4a9a0d23-8e98-4e64-81ac-3e01fed82bee/${location}/Level/${fromDate}/${toDate}?format=Json`;
	// console.log(url);
	const response = await fetch(url);
	const chartData = await response.json();
	const value = [];
	// console.log(chartData[0]);

	for (const data of chartData) {
		value.push(data.Value);
	}
	// console.log(value);

	const codes = [];
	for (const data of chartData) {
		codes.push(data.TimeStamp);
	}
	return { value, codes };
}
export default function ChartDisplay({
	chartState,
	setChartState,
	setChartLoaderState,
	chartType
}: {
	chartState: any;
	setChartState: any;
	setChartLoaderState: any;
	chartType?: string;
}) {
	const [importData, setImportData] = useState<string[]>([]);
	let [importLat, setImportLat] = useState<string[]>([]);
	useEffect(() => {
		async function fetchData() {
			setChartLoaderState(true);
			const codes = await displayData(chartState.location, chartState.fromDate, chartState.toDate);
			setImportData(codes.codes);
			setImportLat(codes.value);
			setChartLoaderState(false);
		}
		fetchData();
	}, [chartState]);
	let city = [];
	for (let i = 0; i < importData.length; i++) {
		city.push('');
	}

	/* let time = importData.map((item) => {
		const date = new Date(parseInt(item.slice(6, -2)));
		return date.toLocaleDateString();
	}); */

	let time = importData.map((item) => {
		const date = new Date(parseInt(item.slice(6, -2)));
		return date.toLocaleDateString('sv-SE', { year: 'numeric', month: 'short', day: 'numeric' });
	});

	if (importLat.length > 365) {
		let median = [];
		let months = [];
		for (let i = 0; i < importLat.length; i += 31) {
			let temp = importLat.slice(i, i + 30);
			temp.sort((a, b) => a - b);
			median.push(temp[Math.floor(temp.length / 2)]);
			months.push(time[i]);
		}

		importLat = median;
		time = months;
		city = city.filter((item, index) => index % 30 === 0);
	}

	const data = {
		labels: time,
		datasets: [
			{
				label: 'Levels',
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
				borderWidth: 1,

				borderRadius: 5
			}
		]
	};
	//dont show labels on y-axis
	const options = {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	};

	return (
		<div>
			<Line data={data} options={options} />
		</div>
	);
}
