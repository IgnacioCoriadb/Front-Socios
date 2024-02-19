import logo from './logo.svg';
import './App.css';
import Membership from './components/Membership';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
      <Routes>
        <Route path="/membership" element={<Membership />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
