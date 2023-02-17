import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import Earth from "./components/Earth";
import Dancer from "./components/Dancer";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stacy" element={<Dancer />} />
          <Route path="earth" element={<Earth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;