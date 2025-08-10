
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />

      </Routes>
    </Router>
  )
}

export default App;