import './App.css'
import New from './components/welcome/New'
import School from './components/school/School'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import "./index.css"
function App() {

  return (
    <div className='app'>
      {/* <Welcome/> */}
      
      {/* <School/> */}
      <Router>
        <Routes>
          <Route path="/" element={<New heading="Welcome Back" subheading="Step into a world of possibilities" img="Illustration.svg" infolength="8" />} />
          <Route path="/school" element={<School />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
