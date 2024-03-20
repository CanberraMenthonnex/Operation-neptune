import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/organismes/Navbar/Navbar'
import Router from './navigation/Router'

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
