import Image from 'next/image';

export default function Hero() {
	return (
		<header className='w-screen h-screen overflow-hidden grid place-items-center'>
			<h1 className='z-0 text-salt text-6xl font-bold'>Waterworks</h1>
			<Image src='/hero.png' fill alt='hero image' className='absolute inset-0 object-cover -z-10' />
		</header>
	);
}
