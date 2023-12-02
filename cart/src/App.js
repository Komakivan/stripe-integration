import Cart from "./components/Cart";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Success from "./components/Success";
import Cancel from "./components/Failed";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/success' element ={<Success/>}/>
        <Route path='/cancel' element ={<Cancel/>}/>
      </Routes>
    </div>
  );
}

export default App;
