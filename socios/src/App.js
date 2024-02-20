import logo from './logo.svg';
import './App.css';
import Membership from './components/membership/Membership';
import People from "./components/people/allPeople";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
      <Routes>
        <Route path="/membership" element={<Membership />} />
        <Route path="/people" element={<People />} />

      </Routes>
      </header>
    </div>
  );
}

export default App;
