import Link from 'next/link';
export default function Menu({ menuIsVisible, onClick }: { menuIsVisible: boolean; onClick: React.ReactEventHandler }) {
	return (
		<nav
			className={`fixed inset-0 min-h-screen z-40
			bg-backdrop-filter backdrop-blur-xl backdrop-brightness-75
			 duration-500 transition-transform overflow-hidden p-12 ${
					menuIsVisible ? 'w-screen -translate-x-0' : ' translate-x-full'
				}`}
		>
			<Link href='/' className=' text-salt text-4xl'>WATERWORKS</Link>
			<ul className='pt-24'>
				<li className='text-4xl pt-12 text-salt'>
					<Link onClick={onClick} href='/'>
						HOME
					</Link>
				</li>
				<li className='text-4xl pt-12 text-salt'>
					<Link onClick={onClick} href='/data'>
						DATA
					</Link>
				</li>
				<li className='text-4xl pt-12 text-salt'>
					<Link target={'_blank'} onClick={onClick} href='https://goteborg.se/wps/portal/start/kommun-o-politik/kommunfakta/digitalisering/oppna-data/oppna-data-soksida/oppna-data-datamangd#esc_entry=479&esc_context=6'>
						HOW IT WORKS
					</Link>
				</li>
			</ul>
		</nav>
	);
}
