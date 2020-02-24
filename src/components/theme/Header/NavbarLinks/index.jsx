import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import DarkMode from "../Hamburger/darkMode";
import "./navBarLinks.css"


const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
		<div
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
       
      </div>
		{/* <DarkMode/> */}
		<ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
			  checked={theme === 'dark'}
			  
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
	</Wrapper>
)

export default NavbarLinks
