import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Detail from "./components/Detail";

function App() {
 
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productName" element={<Detail />} />
      </Routes>
     
  );
}

 
 

export default App;
