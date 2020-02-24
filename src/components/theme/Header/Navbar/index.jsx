import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles';
import DarkMode from "../Hamburger/darkMode";
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">John Doe</Link>
		<NavbarLinks desktop />
		{/* <DarkMode/>  */}
		<DarkModeToggle />
	</Wrapper>
)

export default Navbar
