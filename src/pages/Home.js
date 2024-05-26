import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import data from "../data";
import Card from "../components/Card";
import axios from "axios";

function Home({ shoes, setShoes }) {
    return (
        <div> <div className="main-bg"></div>
        <Container>
          <Row>
            {shoes.map((a, i) => { return <Card shoes={shoes[i]} i={i} />;})}  {/*props 전달*/}
          </Row>
        </Container>
        <button onClick={()=>{axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
            console.log(result.data)
            let copy = [...shoes, ...result.data];
            console.log(copy)
            setShoes(copy);  // setShoes 사용
            }).catch((error)=>console.error('데이터 요청 실패: ', error))
            }}>더보기</button>
      </div>
    );
  }
  
  export default Home;