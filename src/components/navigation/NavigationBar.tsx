import { NavLink } from 'react-router-dom'
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav>
      <ul className={styles.navLinks}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavigationBar