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
		<section className='w-full h-fit grid grid-cols-1 lg:grid-cols-[55%_45%] drop-shadow-md'>
			<section className=' bg-salt w-full h-auto rounded-2xl px-4'>
				<ChartDisplay chartState={chartState} setChartState={setChartState} setChartLoaderState={setChartLoaderState} />
			</section>
			<div className='px-6 py-4 lg:pt-0'>
				<h3 className='font-bold text-abyss'>Graphs on graphs 📝</h3>
				<p className='text-abyss text-sm lg:text-base'>
					It all started a rainy, stormy day in 2006 and Gothenburg was drenched in a watery mess. It was decided that
					to better support us for a similar situation in the future we need to control and measure the water levels, so
					to be aware if new floods are about to hit the city again.
				</p>
				<p className='text-abyss pt-2 text-sm lg:text-base'>
					Gothenburg city now have over 15 years of water level data, free for us to use and present in whatever way we
					want. Here we are using chart.js to present the data in a bar graph. Try filtering below to see what location
					you want to know more about, and between what dates you want to track.
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
