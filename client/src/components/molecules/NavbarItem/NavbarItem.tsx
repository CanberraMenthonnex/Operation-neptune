import { Link, useLocation } from 'react-router-dom'

import { Icon } from '@components/atoms/Icon'

import { NavbarItemProps } from './navbarItem.interface'

/**
 * NavbarItem component
 *
 * @description - Component to handle navigation items in the navbar
 *
 * @param {string} link - Link to navigate
 * @param {IconsName} icon - Icon name
 * @returns {ReactElement} - NavbarItem component
 */
export default function NavbarItem({ link, icon }: NavbarItemProps) {
  const location = useLocation()

  const getIconColor = () => {
    if (link === '/')
      return location.pathname === link
        ? 'var(--primary-color)'
        : 'var(--white-color)'
    return location.pathname.startsWith(link)
      ? 'var(--primary-color)'
      : 'var(--white-color)'
  }

  return (
    <Link to={link}>
      <Icon name={icon} size={30} color={getIconColor()} />
    </Link>
  )
}
