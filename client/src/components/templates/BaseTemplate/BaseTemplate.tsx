import { Outlet } from 'react-router-dom'

/**
 * BaseTemplate component
 *
 * @returns {ReactElement} - BaseTemplate component
 */
export default function BaseTemplate() {
  return (
    <div className="container">
      <Outlet />
    </div>
  )
}
