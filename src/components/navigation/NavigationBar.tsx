import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navLinks}>
        <NavItem to="/" text="Home" /> {/* Navigation link to the home page */}
        <NavItem to="/about" text="About" /> {/* Navigation link to the about page */}
        <NavItem to="/contact" text="Contact" /> {/* Navigation link to the contact page */}
      </ul>
    </nav>
  );
};

interface NavItemProps extends NavLinkProps {
  text: string;
  activeClassName?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, text, ...rest }) => {
  return (
    <li>
      <NavLink to={to} activeClassName={styles.activeLink} {...rest}>
        {text}
      </NavLink>
    </li>
  );
};

export default NavigationBar;
