/**
 * Navbar component with Icons components
 */
import { Icon } from '../../atoms/Icon'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <Icon name="user" size={30} color="#FFFFFF" />
          <Icon name="book" size={30} color="#FFFFFF" />
        </div>
      </div>
    </>
  )
}

export default Navbar
