import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className='bg-atlantic w-screen h-40 flex flex-row justify-between md:justify-center gap-6 items-end px-6 py-4'>
			<ul className='text-salt flex flex-col gap-4 md:flex-row'>
				<li className='text-lg'>
					<Link href='/'>Home</Link>
				</li>
				<li className='text-lg'>
					<Link href='/about'>About us</Link>
				</li>
				<li className='text-lg'>
					<Link href='/info'>How it works</Link>
				</li>
			</ul>
			<ul className='flex flex-row justify-center gap-6'>
				<li className='w-10 h-10'>
					<Link href='https://discord.com' >
						<Image src='/discord.svg' alt='discord logo' width={100} height={100} className='w-10 h-10' />
					</Link>
				</li>
				<li className='w-10 h-10'>
					<Link href='https://github.com/Adishumla/Waterworks' >
						<Image src='/github.svg' alt='github logo' width={100} height={100} className='w-10 h-10' />
					</Link>
				</li>
			</ul>
		</footer>
	);
}
