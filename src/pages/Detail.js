import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  let { id } = useParams(); 
  //page의 파라미터 값 가져오는 훅, ...URL/user/1 user는 pathname, 1은 parameter
  let product = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [count, setCount] = useState(0);
  let [alert, setShowAlert] = useState(true);

  useEffect(() => { 
    let timer = setTimeout(() => {setShowAlert(false); }, 2000)

    return ()=>{clearTimeout(timer)}}, [count]);

  //useEffect: mount, update시 코드실행해줌
  //Dependency문법[] : useEffect 실행조건 넣을 수 있는 곳은 []
  //count라는 state가 변할 때만 실행됌
  //useEffect동작 전에 실행 되는 return ()=>{} clean up function

  let [num, setNum] = useState('')

  useEffect(()=>{ if (isNaN(num) == true){ window.alert('그러지마세요')}}, [num])


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
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
