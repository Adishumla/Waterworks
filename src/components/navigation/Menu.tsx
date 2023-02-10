export default function Menu({menuIsVisible}:{menuIsVisible: boolean}) {
	return (
		<nav className={`fixed inset-0 min-h-screen bg-gradient-to-b from-white to-atlantic duration-500 transition-transform overflow-hidden p-12 ${menuIsVisible? 'w-screen -translate-x-0' : ' translate-x-full'}`}>
			<p className=" text-mediterranean text-6xl">WATERWORKS</p>
			<ul>

			</ul>
		</nav>
	);
}
