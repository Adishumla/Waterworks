import type { NextApiRequest, NextApiResponse } from 'next';

export default async function displayData() {
	const url = 'http://data.goteborg.se/RiverService/v1.1/MeasureSites/4a9a0d23-8e98-4e64-81ac-3e01fed82bee?format=Json';
	const response = await Promise.resolve(fetch(url));
	const data = await response.json();
	return (
		<>
			<h1>Display Data</h1>
			{data.map((item: any) => (
				<div key={item.id}>
					<h2>{item.Code}</h2>
					<p>{item.Description}</p>
					<p>{item.Lat}</p>
				</div>
			))}
		</>
	);
}
