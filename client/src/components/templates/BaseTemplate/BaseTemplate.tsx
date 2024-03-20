import { Outlet } from 'react-router-dom'

/**
 * BaseTemplate component
 *
 * @description - Component to handle the base template use by all the pages
 * @returns {ReactElement} - BaseTemplate component
 */
export default function BaseTemplate() {
  return (
    <div className="container">
      <Outlet />
    </div>
  )
}
