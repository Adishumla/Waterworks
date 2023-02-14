import ChartDisplay from '@/components/ChartDisplay';

const API_KEY = process.env.API_KEY;
export default function Data() {
	return (
		<main className='bg-gradient-to-b from-white to-atlantic'>
			{/* send apikey to chartdisplay */}
			<ChartDisplay apiKey={API_KEY} />
		</main>
	);
}
