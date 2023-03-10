export default function MenuButton({
	menuIsVisible,
	onClick
}: {
	menuIsVisible: boolean;
	onClick: React.ReactEventHandler;
}) {
	return (
		<button
			onClick={onClick}
			className={`fixed hover:cursor-pointer z-50 top-4 p-2 right-6 w-14 h-9 flex flex-col justify-center items-center gap-2 mix-blend-multiply ${
				menuIsVisible ? '' : ''
			}`}
		>
			<p className={` ${menuIsVisible ? 'hidden' : ''}`}>MENU</p>
			<p className={` ${menuIsVisible ? '' : 'hidden'}`}>CLOSE</p>
		</button>
	);
}
