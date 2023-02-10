import Hero from '@/components/Home/Hero';
import Link from "next/link";


export default function Home() {
	return (
		<>
			<Hero />
			<main className='bg-gradient-to-b from-white to-atlantic min-h-screen px-6'>
				<section className='flex flex-col gap-3 mt-14'>
					<h2 className='text-4xl font-bold text-abyss'>About us</h2>
					<p className='text-abyss'>Lorem ipsum dolor sit amet consectetur. Aenean velit accumsan pharetra nunc elit quis eu duis vulputate. Odio vel massa risus sed. Viverra tincidunt pretium amet in at eget. Ut interdum pharetra proin</p>
				</section>

				<section className='flex flex-col gap-5 mt-14'>
					<h2 className='text-4xl font-bold text-abyss -mt-1'>How it works</h2>
					<div className='w-full h-56 bg-salt rounded-3xl drop-shadow-lg'></div>
					<p className='text-abyss'>Lorem ipsum dolor sit amet consectetur. Aenean velit accumsan pharetra nunc elit quis eu duis vulputate. Odio vel massa risus sed</p>
					<Link className='bg-baltic text-salt font-bold px-8 py-3 w-fit rounded-3xl self-center md:self-start' href="#">View more</Link>
					<div className='w-full h-56 bg-salt rounded-3xl drop-shadow-lg'></div>
				</section>
			</main>
		</>
	);
}
