import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "../LoginModal/LoginModal";
import '../LoginModal/login.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Container,
} from "reactstrap";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [navDark, setNavDark] = useState(false);
  const [menulist, setMenulist] = useState(false);
  window.addEventListener("scroll", navHandler);
  window.addEventListener("resize", menulistHandler);
  function navHandler() {
    if (window.scrollY >= 80) {
      setNavDark(true);
    } else {
      setNavDark(false);
    }
  }
  function menulistHandler() {
    if (window.innerWidth <= 560) {
      setMenulist(true);
    } else {
      setMenulist(false);
    }
  }
  return (
    <nav className={navDark ? "navactive" : ""}>
      <div className="logo">
        <h1>YAMU</h1>
        {menulist ? (
          <></>
        ) : (
          <ul>
            <li className="solution">Solution</li>
            <li>Tools</li>
            <li>About</li>
          </ul>
        )}
      </div>
      {/* <button onClick={()=> {navigate("/login");}}>Menu list name</button> */}
      <Button id="ModelBtn" outline={modalOpen} onClick={() => setModalOpen(true)}>
        Login
      </Button>
      <Modal
        fullscreen
        isOpen={modalOpen}
        className="shadow p-md-5 p-sm-3 rounded" id="modaloverLay"
      >
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>{" "}
        <LoginPage />
      </Modal>
    </nav>
  );
};

export default Navbar;
