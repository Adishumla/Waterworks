'use client';
import ChartDataForm from './form/ChartDataForm';
import ChartDisplay from './ChartDisplay';

import { useState } from 'react';

export default function ChartWrapper({ locations }: { locations: any }) {
	const [chartState, setChartState] = useState({
		location: 'Agnesberg',
		fromDate: '2023-01-01',
		toDate: '2023-01-31'
	});

	const [chartLoaderState,setChartLoaderState] = useState(false);

	return (
		<section className='w-full h-fit grid grid-cols-1 md:grid-cols-2 drop-shadow-md'>
			<section className=' bg-salt w-full h-auto rounded-2xl p-4'>
				<ChartDisplay chartState={chartState} setChartState={setChartState} setChartLoaderState={setChartLoaderState} />
			</section>
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eligendi eveniet animi reprehenderit accusamus necessitatibus vero nesciunt aliquam suscipit, maxime nostrum eius cum atque delectus consectetur ipsam sapiente quo quis.
				Eligendi est facilis quaerat, voluptatibus fugiat, ad voluptates qui rerum mollitia aspernatur consequatur officia? Labore adipisci eveniet voluptas ducimus quia architecto qui exercitationem aperiam voluptatem? Error doloremque debitis tempore aliquid?
				</p>
				<ChartDataForm locations={locations} chartState={chartState} setChartState={setChartState} chartLoaderState={chartLoaderState} />
			</div>
		</section>
	);
}
