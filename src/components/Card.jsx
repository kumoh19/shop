import { Col } from "react-bootstrap";

function Card(props) {
  return (
    <Col>
      <img
        src={process.env.PUBLIC_URL + "/zzang" + ((props.i % 3) + 1) + ".png"} 
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default Card;
