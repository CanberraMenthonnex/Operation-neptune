import { Link, useLocation } from 'react-router-dom'

import { Icon } from '../../atoms/Icon'
import { NavbarItemProps } from './navbarItem.interface'

export default function NavbarItem({ link, icon }: NavbarItemProps) {
  const location = useLocation()
  return (
    <Link to={link}>
      <Icon
        name={icon}
        size={30}
        color={
          link === location.pathname
            ? 'var(--primary-color)'
            : 'var(--white-color)'
        }
      />
    </Link>
  )
}
