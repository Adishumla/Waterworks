'use client';

import { useState } from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';

export default function Navigation() {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const toggleMenu = () => {
		setMenuIsVisible(!menuIsVisible);
		menuIsVisible ? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden');
	};

	return (
		<>
			<Menu menuIsVisible={menuIsVisible} onClick={toggleMenu} />
			<MenuButton menuIsVisible={menuIsVisible} onClick={toggleMenu} />
		</>
	);
}
