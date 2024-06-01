import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  let navigate = useNavigate(); //페이지 이동
  return (
    <Navbar bg="light" expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">게시판</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate("/");}}> Home </Nav.Link>
            <Nav.Link onClick={() => {navigate("/detail");}}> Detail </Nav.Link>
            <Nav.Link onClick={() => {navigate("/about");}}> About </Nav.Link>
            <Nav.Link onClick={() => {navigate("/cart");}}> Cart </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {props.result.isLoading ? '로딩중' : props.result.data.name}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
