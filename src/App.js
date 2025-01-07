
import Java from './pages/Java';
import Python from './pages/Python';
import HTML from './pages/HTML';
import Home from './pages/Home';
import CSS from './pages/CSS';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/java" element={<Java/>}></Route>
        <Route path="/python" element={<Python/>}></Route>
        <Route path="/html" element={<HTML/>}></Route>
        <Route path="/css" element={<CSS/>}></Route>
    </Routes>

    </BrowserRouter>
  );
}

