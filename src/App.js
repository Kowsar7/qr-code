import './App.css';
import { Routes, Route } from 'react-router'

import QRCode from './Components/QRCode/QRCode';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<QRCode />} />
      </Routes>
    </div>
  );
}

export default App;