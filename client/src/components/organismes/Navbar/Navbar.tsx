import NavbarItem from '@components/molecules/NavbarItem/NavbarItem'

import styles from './navbar.module.css'

/**
 * Navbar component
 *
 * @description A component to display the navbar
 * @returns {ReactElement} - Navbar component
 */
function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <NavbarItem link="/" icon="map" />
          <NavbarItem link="/characters" icon="user" />
          <NavbarItem link="/scenarios" icon="book" />
        </div>
      </div>
    </>
  )
}

export default Navbar
