import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import './App.css'
import Basic from './pages/Admin/Basic'

function App(): React.JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/basic" element={<Basic />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
