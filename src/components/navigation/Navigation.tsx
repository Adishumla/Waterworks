'use client';

import { useState } from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';

export default function Navigation() {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const toggleMenu = () => {
		setMenuIsVisible(!menuIsVisible);
	};

	return (
		<>
			<Menu menuIsVisible={menuIsVisible} />
			<MenuButton menuIsVisible={menuIsVisible} onClick={toggleMenu} />
		</>
	);
}
