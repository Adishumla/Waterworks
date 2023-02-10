import Hero from '@/components/Home/Hero';
import ChartData from '@/components/ChartData';
import ChartDisplay from '@/components/ChartDisplay';

export default function Home() {
	return (
		<>
			<ChartDisplay/>
			<Hero />
			<ChartData />
			<main className='bg-gradient-to-b from-white to-atlantic min-h-screen'></main>
		</>
	);
}
