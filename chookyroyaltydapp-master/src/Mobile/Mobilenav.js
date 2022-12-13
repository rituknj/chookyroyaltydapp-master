import React, { useState } from "react";
import Dogimage from "../Components/Images/chooky-wink1.gif";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import walletconnect from "../Components/Images/connect.dc871f60434bd877387be88f4a3192d6.svg";
import metamask from "../Components/Images/meta.png";
import "./Mobilenav.css";
import { Link } from "react-router-dom";

export default function Mobilenav({ account, Dissconnect, Metamask, WalletC }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sliceadd = (address) => {
    const first = address.slice(0, 4);
    const second = address.slice(38);
    return first + "..." + second;
  };
  return (
    <>
      <div className="container">
        <div className="images">
          <div className="image-dog11">
            <a href="#" target="_blank">
              <img src={Dogimage} alt="" className="image-dog11" />
            </a>
          </div>

          <form class="d-flex mx-4" role="search">
            <p className="minstakelink mt-2">
              <Link to="/mint" className="mslink">
                {" "}
                Mint
              </Link>
            </p>
          </form>
          <form class="d-flex mx-4" role="search">
            <p className="minstakelink mt-2">
              <Link to="/stake" className="mslink">
                {" "}
                Stake
              </Link>
            </p>
          </form>
          <div className="connect-wallet-button">
            <form className="d-flex" role="search">
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
          </div>
        </div>
      </div>
      <div>
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
    </>
  );
}
