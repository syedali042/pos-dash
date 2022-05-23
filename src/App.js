import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
