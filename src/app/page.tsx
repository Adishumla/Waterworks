import ChartDisplay from '@/components/ChartDisplay';
import Hero from '@/components/Home/Hero';
import Link from 'next/link';
import ExampleChartOne from '@/components/Home/ExampleChartOne';
import ExampleChartTwo from '@/components/Home/ExampleChartTwo';
import { Bar } from 'react-chartjs-2';
export default function Home() {
	return (
		<>
			<Hero />
			<main className='bg-gradient-to-b white min-h-screen px-6 lg:px-16  pb-8 grid grid-cols-1 md:grid-cols-2 gap-16'>
				<section className='flex flex-col gap-3 mt-14'>
					<h2 className='text-4xl font-bold text-abyss'>About us</h2>

					<p className='text-abyss'>
						Water is one of the most essential resources on our planet, and understanding water statistics is crucial
						for ensuring its sustainable use and management. From freshwater availability to water quality, a wide range
						of factors contribute to our understanding of this vital resource.
					</p>

					<p className='text-abyss'>
						Understanding water statistics can help inform policy decisions and shape strategies for sustainable water
						management. Efforts to improve access to safe drinking water, reduce water pollution, and increase the
						efficiency of water use are critical for addressing global water challenges. By staying informed and taking
						action, we can work towards ensuring that water remains a precious resource for generations to come.
					</p>
				</section>

				<section className='flex flex-col gap-5 mt-14'>
					<h2 className='text-4xl font-bold text-abyss -mt-1'>How it works</h2>
					<div className='w-full h-auto bg-marineBlue border border-3 rounded-2xl drop-shadow-md p-2 '>
						<ExampleChartOne locations='Agnesberg' />
					</div>
					<p className='text-abyss'>
						Lorem ipsum dolor sit amet consectetur. Aenean velit accumsan pharetra nunc elit quis eu duis vulputate.
						Odio vel massa risus sed
					</p>
					<Link
						className='bg-baltic text-salt font-bold px-8 py-3 w-fit rounded-md self-center md:self-start hover:bg-baltic/[.85] hover:outline-baltic/[.85] active:bg-baltic/[0]'
						href='/data'
					>
						View more
					</Link>
					<div className='w-full h-auto bg-marineBlue border border-3 rounded-2xl drop-shadow-xl p-2 '>
						<ExampleChartTwo locations='Tingstad' />
					</div>
				</section>
			</main>
		</>
	);
}
