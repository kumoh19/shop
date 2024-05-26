import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate(); //페이지 이동
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">게시판</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate("/");}}> Home </Nav.Link>
          <Nav.Link onClick={() => {navigate("/detail");}}> Detail </Nav.Link>
          <Nav.Link onClick={() => {navigate("/about");}}> About </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
