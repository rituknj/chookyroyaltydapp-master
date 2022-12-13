import React, { useState } from "react";
import "./Navbar.css";
import Dogimage from "./Images/chooky-wink1.gif";
import { Button, Modal, Offcanvas } from "react-bootstrap";
import walletconnect from "./Images/connect.dc871f60434bd877387be88f4a3192d6.svg";
import metamask from "./Images/meta.png";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

export default function Navbar({ account, Dissconnect, Metamask, WalletC }) {
  const [show, setShow] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const sliceadd = (address) => {
    const first = address.slice(0, 4);
    const second = address.slice(38);
    return first + "..." + second;
  };
  return (
    <div>
      {/* NAVBAR */}

      <nav class="navbar navbar-expand-lg bg-tranparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <button onClick={handleShowOffcanvas} className="offcanvasbutton">
            {" "}
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>

              <div className="image-dog1">
                <a href="/" target="_blank">
                  <img src={Dogimage} alt="" className="image-dog" />
                </a>
              </div>
            </ul>
            <form class="d-flex" role="search">
              <p className="minstakelink">
                <Link to="/mint" className="mslink">
                  {" "}
                  Mint
                </Link>
              </p>
            </form>
            <form class="d-flex mx-4" role="search">
              <p className="minstakelink">
                <Link to="/stake" className="mslink">
                  {" "}
                  Stake
                </Link>
              </p>
            </form>

            <form class="d-flex" role="search">
              <Button
                variant="primary"
                onClick={() => {
                  if (account) {
                    Dissconnect();
                    return;
                  }
                  handleShow();
                }}
                className="btn"
              >
                {account ? sliceadd(account) : "Connect Wallet"}
              </Button>
            </form>

            {/* DISCONNECT BUTTON */}

            {/* <form class="d-flex mx-2" role="search">
              <DropdownButton
                className="btn2"
                id="dropdown-basic-button"
                title="Dropdown button"
              >
                <Dropdown.Item>Disconnect</Dropdown.Item>
              </DropdownButton>
            </form> */}
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="ms-auto">
                Please connect your wallet
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src={metamask}
                  alt=""
                  className="imgwidth"
                  onClick={() => {
                    Metamask();
                    setShow(false);
                  }}
                />
                <img
                  src={walletconnect}
                  alt=""
                  className="imgwidth wallet-image-nav"
                  onClick={() => {
                    WalletC();
                    setShow(false);
                  }}
                />
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* <div className="background-image">
            <img src={background} alt="" className="background" />
          </div> */}
      </nav>

      {/* OFFCANVAS */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <div className="image-dog1">
              <a href="/" target="_blank">
                <img src={Dogimage} alt="" className="image-dogoff" />
              </a>
            </div>
          </Offcanvas.Title>
          <ImCross onClick={handleCloseOffcanvas} color="#fff" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-block">
            <p>
              <Link to="/mint" className="mslink">
                {" "}
                Mint
              </Link>
            </p>
            <p>
              <Link to="/stake" className="mslink">
                {" "}
                Stake
              </Link>
            </p>
            <Button
              variant="primary"
              onClick={() => {
                if (account) {
                  Dissconnect();
                  return;
                }
                handleShow();
              }}
              className="btn"
            >
              {account ? sliceadd(account) : "Connect Wallet"}
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
