import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const url = 'http://data.goteborg.se/RiverService/v1.1/MeasureSites/4a9a0d23-8e98-4e64-81ac-3e01fed82bee?format=Json';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const response = await Promise.resolve(fetch(url));
	const data = await response.json();
	console.log(data);
}
