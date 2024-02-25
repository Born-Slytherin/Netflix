import './App.css';
import Header from './components/Header';

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Hero from './components/Hero';
import SignUP from './pages/SignUP';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/signUP' element={<SignUP/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
