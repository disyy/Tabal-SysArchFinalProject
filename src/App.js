// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/HomePage" element = {<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;