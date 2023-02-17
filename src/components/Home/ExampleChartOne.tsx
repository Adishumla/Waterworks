'use client';
import ChartDisplay from '@/components/ChartDisplay';

import { useState } from 'react';

export default function ExampleChartOne({ locations }: { locations: any }) {
	const [chartState, setChartState] = useState({
		location: 'Agnesberg',
		fromDate: '2023-01-01',
		toDate: '2023-01-31'
	});
	return (
		<>
			<ChartDisplay setChartLoaderState={() => {}} chartState={chartState} setChartState={setChartState} />
		</>
	);
}
