import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
let clave = "";
let palabra = "";
clave = (e) => {
  palabra = e.target.value;
};

let submitHandler = (e) => {
  if (palabra === "") {
    window.location.href = "/";
  } else {
    window.location.href = `/buscar/${palabra}`;
  }
};
function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">ReactJS - Autos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/heroes-dc">Heroes DC</Nav.Link>
          <Nav.Link href="/heroes-marvel">Heroes Marvel</Nav.Link>
        </Nav>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            name="clave"
            onChange={clave}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={submitHandler}
          >
            Buscar
          </button>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
