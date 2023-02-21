import ChartWrapper from '@/components/ChartWrapper';

export default async function Data() {
	const response = await fetch(
		'http://data.goteborg.se/RiverService/v1.1/MeasureSites/4a9a0d23-8e98-4e64-81ac-3e01fed82bee?format=Json'
	);
	const data = await response.json();

	const locations = data.map((point: any) => {
		return point.Code;
	});

	return (
		<main className='bg-gradient-to-b bg-slate-100 px-6 md:px-16 flex justify-center items-center min-h-screen'>
			{/* send apikey to chartdisplay */}
			<section className='bg-salt w-full h-fit rounded-2xl p-4 shadow-2xl '>
				<ChartWrapper locations={locations} />
			</section>
		</main>
	);
}
