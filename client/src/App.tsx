import { BrowserRouter } from 'react-router-dom'

import Navbar from '@components/organismes/Navbar/Navbar'
import Router from '@navigation/Router'

/**
 * App component
 *
 * @description The root component of the application : contains the navigation and the main layout
 * @returns {ReactElement} - App component
 */
function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Navbar />
        <main>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
