import Hero from '@/components/Home/Hero';
import Data from '@/components/data';

export default function Home() {
	return (
		<>
			<Hero />
			<Data />
			<main className='bg-gradient-to-b from-white to-atlantic min-h-screen'></main>
		</>
	);
}
