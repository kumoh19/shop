import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Detail from "./pages/Detail.js";
import About from "./pages/About.js";
import Card from "./components/Card.jsx";
import Event from "./pages/Event.js";
import Home from "./pages/Home.js";

function App() {
  let [shoes, setShoes] = useState(data);
  console.log(shoes);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home shoes={shoes}/>}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>404페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
