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
