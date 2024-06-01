import { tab } from "@testing-library/user-event/dist/tab";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Context1 } from "../App";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

//styled-components 연습
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {

  let {stock} = useContext(Context1) //보관함 해체

  let { id } = useParams(); 
  //page의 파라미터 값 가져오는 훅, ...URL/user/1 user는 pathname, 1은 parameter
  let product = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [count, setCount] = useState(0);

    //------------------------------2초동안 팝업 띄우기----------------------------------------
  let [alert, setShowAlert] = useState(true);

  useEffect(() => { 
    let timer = setTimeout(() => {setShowAlert(false); }, 2000)

    return ()=>{clearTimeout(timer)}}, [count]);

  //useEffect: mount, update시 코드실행해줌
  //Dependency문법[] : useEffect 실행조건 넣을 수 있는 곳은 []
  //count라는 state가 변할 때만 실행됌
  //useEffect동작 전에 실행 되는 return ()=>{} clean up function

  //------------------------------input박스에 문자 입력하면 alert경고 창 띄우기----------------------------------------
  let [num, setNum] = useState('')

  useEffect(()=>{ if (isNaN(num) == true){ window.alert('그러지마세요')}}, [num])

  //------------------------------탭 ui----------------------------------------
    let [tab, setTab] = useState(0)

    let dispatch = useDispatch()

  //------------------------------최근 본 상품----------------------------------------

  useEffect(() => {
    let isWatched = JSON.parse(localStorage.getItem('watched'));
    isWatched.push(product.id);
    isWatched = new Set(isWatched);
    isWatched = Array.from(isWatched);
    localStorage.setItem('watched', JSON.stringify(isWatched));
  }, []);

  return (
    <Container>
      {/* <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
      </Box> */}
      {alert == true ? (<div className="alert alert-warning">2초이내 구매시 할인</div>) : null}

      <button onClick={() => { setCount(count + 1); }}>
        안녕버튼
      </button>
      <Row>
        <Col>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOj_sDKDMFTwuKRfWwKEw-gxAzxpNGn9QMeCzoZPlbA&s"
            width="100%"
          />
        </Col>
        <Col>
        <input onChange={ (e) => { setNum(e.target.value) } } />
        <h4>{product.title}</h4>
        <p>{product.content}</p>
        <p>{product.price}</p>
        <button className="btn btn-danger" onClick={() => dispatch(addItem( { id: product.id, name: product.title, count: 1 } ))}>주문하기</button>
        </Col>
    </Row>
    <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
            <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
    </Nav>
    <TabContent tab={tab} shoes={props.shoes}/> 
    </Container>
  );
}

// function TabContent(props){ //prop대신 {tab} 넣으면 props.tab->tab으로 사용가능
//     if (props.tab === 0){
//         return <div>내용0</div>
//     }
//     if (props.tab === 1){
//         return <div>내용1</div>
//     }
//     if (props.tab === 2){
//         return <div>내용2</div>
//     }
//   }

function TabContent({tab, shoes}){ 
  let [fade, setFade] = useState('')
  let {stock} = useContext(Context1) //보관함 해체

  useEffect(()=>{// 탭 state가 변할 때 end 부착
    setTimeout(()=>{setFade('end')},100)
    
    return()=>{
      setFade('')
    }
  },[tab])
    return (<div className={'start '+ fade}>
      {[<div>{stock}</div>,<div>내용1</div>,<div>내용2</div>][tab]}
    </div>)
  }

export default Detail;
