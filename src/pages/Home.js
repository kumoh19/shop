import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import data from "../data";
import Card from "../components/Card";
import axios from "axios";

function Home(props) {
    return (
        <div> <div className="main-bg"></div>
        <Container>
          <Row>
            {props.shoes.map((a, i) => { return <Card shoes={props.shoes[i]} i={i} />;})}  {/*props 전달*/}
          </Row>
        </Container>
        <button onClick={()=>{axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
            console.log(result.data)
            let copy = [...props.shoes, ...result.data];
            }).catch(()=>console.log('실패'))
            }}>버튼</button>
      </div>
    );
  }
  
  export default Home;