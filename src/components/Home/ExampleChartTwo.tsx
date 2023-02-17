'use client';
import ChartDisplayLine from '@/components/ChartDisplayLine';

import { useState } from 'react';

export default function ExampleChartTwo({ locations }: { locations: any }) {
	const [chartState, setChartState] = useState({
		location: 'Tingstad',
		fromDate: '2023-01-01',
		toDate: '2023-01-31'
	});
	return (
		<>
			<ChartDisplayLine setChartLoaderState={() => {}} chartState={chartState} setChartState={setChartState} />
		</>
	);
}
