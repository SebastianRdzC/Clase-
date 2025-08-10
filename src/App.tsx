
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Landing from './pages/Landing';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  )
}

export default App