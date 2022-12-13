import React from "react";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import Footer1 from "../Footer1";
import Navbar from "../Navbar";

export default function Stake({ account, Dissconnect, Metamask, WalletC }) {
  return (
    <section>
      <div>
        <div className="background">
          <Navbar
            account={account}
            Dissconnect={Dissconnect}
            Metamask={Metamask}
            WalletC={WalletC}
          />
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="radiers">
                  <h3 className="mintheadingname">STAKE</h3>
                  <div class="card">
                    <img
                      src="https://chooky-inu.com/wp-content/uploads/2022/10/Chooky-Home-2.png"
                      class="card-img-top d-block m-auto"
                      alt="..."
                    />
                  </div>
                  <button className="claim-bu1">Stake Your NFT</button>
                  {/* <button className="claim-bu1">You have already staked</button> */}
                  {/* <button className="claim-bu1">Minting Over</button> */}
                  <div className="mintinfo d-flex justify-content-between align-items-baseline">
                    <div className="mainifo">
                      <div className="info mt-5">
                        <p className="table-para2">Pending Reward :</p>
                      </div>
                      <div className="info mt-5">
                        <p className="table-para2">Claimed Reward :</p>
                      </div>
                    </div>
                    <div className="mainifo">
                      <div className="d-flex justify-content-between align-items-baseline">
                        <div className="info mt-3">
                          <p className="table-para2">$ 0 CHOO</p>{" "}
                        </div>
                        <div className="info">
                          <button className="claim-bu1 mx-2">CLAIM</button>
                        </div>
                      </div>
                      <div className="info7">
                        <p className="table-para2">$ 0 CHOO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
          {/* <div>
            <div>
              <div className="header-foot1 ">
                <h1 className="header-footer">
                  Join the most energetic crypto community that is ...{" "}
                </h1>
              </div>
            </div>
            <div>
              <h2 className="design-font"># CHOOKY</h2>
            </div>
            <div className="social-icons">
              <a href="#" target="_blank">
                <BsTelegram
                  className="telegram-icons"
                  style={{
                    color: "#fff",
                    fontSize: "50px",
                    marginRight: "30px",
                    marginBottom: "50px",
                  }}
                />
              </a>
              <a href="#" target="_blank">
                <BsTwitter
                  className="twitter-icons"
                  // style={{ color: "#fff", fontSize: "50px", marginBottom: "0px" }}
                />
              </a>
            </div>
          </div> */}
          <Footer1/>
        </div>
      </div>
    </section>
  );
}
