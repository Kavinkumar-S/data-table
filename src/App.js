import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from './Components/Post';
function App() {
  return (
    <BrowserRouter>
    <Routes>
  
<Route path='/' element={  <Home/>}/>
<Route path='/post/:id' element={<Post/>}/>    
</Routes>
</BrowserRouter>    
  );
}

export default App;
