import type { NextApiRequest, NextApiResponse } from 'next';

export default async function displayData() {
	const url = 'http://data.goteborg.se/RiverService/v1.1/MeasureSites/4a9a0d23-8e98-4e64-81ac-3e01fed82bee?format=Json';
	const response = await Promise.resolve(fetch(url));
	const chartData = await response.json();
	const codes = [];
	for (const data of chartData) {
		codes.push(data.Code);
	}
	return codes;
}
