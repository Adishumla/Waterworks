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
	return (
		<>
			<ChartDisplay chartState={chartState} setChartState={setChartState} />
			<ChartDataForm locations={locations} chartState={chartState} setChartState={setChartState} />
		</>
	);
}
