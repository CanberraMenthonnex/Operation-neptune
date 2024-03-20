// The router that will handle the navigation of the application
import { Route, Routes } from 'react-router-dom'

import { routes } from './routes'

export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  )
}
