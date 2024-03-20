import Navbar from './components/molecules/Navbar/Navbar'
import Router from './navigation/Router'

function App() {
  return (
    <div id="app">
      <Navbar />
      <main>
        <Router />
      </main>
    </div>
  )
}

export default App
