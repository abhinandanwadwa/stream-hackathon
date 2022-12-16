import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
