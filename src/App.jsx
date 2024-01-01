/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import Routers from './router/Routers'
import Cursor from "./components/cursor-animation/curosor";

function App() {

  return (
    <>   
    <Cursor />
      <Router>
        <Routers />
      </Router>

    </>
  )
}

export default App
