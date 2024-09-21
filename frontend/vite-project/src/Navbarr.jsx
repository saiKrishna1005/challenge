import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbarr.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Navbarr = () => {
  const [menu, setMenu] = useState("home");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currState, setCurrState] = useState("Login");
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-0">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">Hotel Krishna</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
              <Link
                to="/"
                className={menu === "home" ? "active" : ""}
                onClick={() => {
                  setMenu("home");
                }}
              >
                Home
              </Link>
    <fieldset>
    <label htmlFor="">Book Date here</label> &nbsp;&nbsp;&nbsp;&nbsp;         
    <input type="date" />

      </fieldset>          
    
              
            </Nav>
            <div className="icons_container">
              <img  alt="" />
              <div className="navbar_search_icon">
                <Link to={"/cart"}>
                  <img  alt="" />
                </Link>
                
              </div>
              <Button variant="secondary" onClick={handleShow} className="px-4">
                LogIn
              </Button>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currState}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currState === "Login" ? (
            <></>
          ) : (
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <Form.Control
                placeholder="your name"
                aria-describedby="basic-addon1"
                // value={userData.full_name}
                // onChange={handleData}
                name="name"
              />
            </InputGroup>
          )}

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
            <Form.Control
              placeholder="your email"
              aria-describedby="basic-addon2"
              // value={userData.email}
              // onChange={handleData}
              name="email"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">Password</InputGroup.Text>
            <Form.Control
              placeholder="your password"
              aria-describedby="basic-addon3"
              // value={userData.phone}
              // onChange={handleData}
              name="password"
            />
          </InputGroup>
        </Modal.Body>
        <div className="text-center">
          <Button variant="primary" onClick={handleClose} className="px-5 py-2">
            {currState === "Sign Up" ? "create an account" : "Login"}{" "}
          </Button>
          <div>
            {currState === "Login" ? (
              <p>
                Create an account{" "}
                <span className="text-primary" onClick={() => setCurrState("Sign Up")}>Click here</span>
              </p>
            ) : (
              <p>
                Already have account{" "}
                <span className="text-primary" onClick={() => setCurrState("Login")}>Login here</span>
              </p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Navbarr;
