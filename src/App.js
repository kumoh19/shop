import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { lazy, Suspense, createContext, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import About from "./pages/About.js";
import Card from "./components/Card.jsx";
import Event from "./pages/Event.js";
import Home from "./pages/Home.js";
import { useQuery } from "react-query";
import axios from "axios";

// import Detail from "./pages/Detail.js";
// import Cart from "./pages/Cart.js";

const Detail = lazy( () => import('./pages/Detail.js') ) //컴포넌트가 필요해지면 import
const Cart = lazy( () => import('./pages/Cart.js') )

//Context API 사용
export let Context1 = createContext() //Context: state 보관함

function App() {

  useEffect(() => {
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);
  
  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj)) //array/object -> json 변환, 데이터 깨짐 방지
  let output = localStorage.getItem('data')
  
  console.log(JSON.parse(output).name); //출력할때도 json -> array/object 변환

  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]) //Detail, TabContent에서 사용하고 싶음

  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data }))

  return (
    <div className="App">
      <Header result={result}/>
      <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes}/>}/>
        <Route path="/detail/:id" element={<Context1.Provider value={{stock}}><Detail shoes={shoes} /></Context1.Provider>} />
        <Route path="/cart" element={ <Cart/> } /> 
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
      </Suspense>
    </div>
  );
}

export default App;
