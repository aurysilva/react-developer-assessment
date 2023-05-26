import React, { useState } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.menuToggle} onClick={handleMenuToggle}>
        <div className={styles.toggleBar}></div>
        <div className={styles.toggleBar}></div>
        <div className={styles.toggleBar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <NavItem to="/web-projects/react/the-post/" text="Home" onClick={handleMenuToggle} /> {/* Navigation link to the home page */}
        <NavItem to="/web-projects/react/the-post/about" text="About" onClick={handleMenuToggle} /> {/* Navigation link to the about page */}
        <NavItem to="/web-projects/react/the-post/contact" text="Contact" onClick={handleMenuToggle} /> {/* Navigation link to the contact page */}
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
