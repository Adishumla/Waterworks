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

	const [chartLoaderState, setChartLoaderState] = useState(false);

	return (
		<section className='w-full h-fit grid grid-cols-1 md:grid-cols-2 drop-shadow-md'>
			<section className=' bg-salt w-full h-auto rounded-2xl p-4'>
				<ChartDisplay chartState={chartState} setChartState={setChartState} setChartLoaderState={setChartLoaderState} />
			</section>
			<div className='pl-6'>
				<h3 className='font-bold text-abyss'>Graphs on graphs 📝</h3>
				<p className='text-abyss'>
					It all started a rainy, stormy day in 2006 and Gothenburg was drenched in a watery mess. It was decided that
					to better support us for a similar situation in the future we need to control and measure the water levels, so
					to be aware if new floods are about to hit the city again.
				</p>
				<ChartDataForm
					locations={locations}
					chartState={chartState}
					setChartState={setChartState}
					chartLoaderState={chartLoaderState}
				/>
			</div>
		</section>
	);
}
