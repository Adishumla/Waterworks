export default function MenuButton({
	menuIsVisible,
	onClick,
}: {
	menuIsVisible: boolean;
	onClick: React.ReactEventHandler;
}) {
	return (
		<button onClick={onClick} className={` ${menuIsVisible ? '' : ''}`}>
			open/close
		</button>
	);
}
