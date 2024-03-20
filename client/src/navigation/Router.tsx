import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
