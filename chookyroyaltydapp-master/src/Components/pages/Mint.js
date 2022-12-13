import React from "react";
// import { BsTelegram, BsTwitter } from "react-icons/bs";
import Footer1 from "../Footer1";
import Navbar from "../Navbar";

export default function Mint({ account, Dissconnect, Metamask, WalletC }) {
  return (
    <section>
      <div className="background">
        <Navbar
          account={account}
          Dissconnect={Dissconnect}
          Metamask={Metamask}
          WalletC={WalletC}
        />
        <div className="container mt-5">
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="radiers">
                  <h3 className="mintheadingname">RAIDERS</h3>
                  <div class="card">
                    <img
                      src="https://chooky-inu.com/wp-content/uploads/2022/10/Chooky-Home-2.png"
                      class="card-img-top d-block m-auto"
                      alt="..."
                    />
                  </div>
                  <button className="claim-bu1">MINT</button>
                  {/* <button className="claim-bu1">You have already minted</button> */}
                  {/* <button className="claim-bu7">Minting Over</button> */}
                  <div className="mintinfo d-flex justify-content-between align-items-center">
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para2">Nos. Minted :</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">Your Balance :</p>
                      </div>
                    </div>
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para5">0/1000</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">$ 0 CHOO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="radiers">
                  <h3 className="mintheadingname">STAKERS</h3>
                  <div class="card">
                    <img
                      src="https://chooky-inu.com/wp-content/uploads/2022/10/Chooky-Home-2.png"
                      class="card-img-top d-block m-auto"
                      alt="..."
                    />
                  </div>
                  <button className="claim-bu7">Minting Not Open</button>
                  <div className="mintinfo d-flex justify-content-between align-items-center">
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para2">Nos. Minted :</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">Your Balance :</p>
                      </div>
                    </div>
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para5">0/1000</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">$ 0 CHOO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="radiers">
                  <h3 className="mintheadingname">GAMERS</h3>
                  <div class="card">
                    <img
                      src="https://chooky-inu.com/wp-content/uploads/2022/10/Chooky-Home-2.png"
                      class="card-img-top d-block m-auto"
                      alt="..."
                    />
                  </div>
                  <button className="claim-bu7">Minting Not Open</button>
                  <div className="mintinfo d-flex justify-content-between align-items-center">
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para2">Nos. Minted :</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">Your Balance :</p>
                      </div>
                    </div>
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para5">0/1000</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">$ 0 CHOO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="radiers">
                  <h3 className="mintheadingname">ANIME</h3>
                  <div class="card">
                    <img
                      src="https://chooky-inu.com/wp-content/uploads/2022/10/Chooky-Home-2.png"
                      class="card-img-top d-block m-auto"
                      alt="..."
                    />
                  </div>
                  <button className="claim-bu7">Minting Not Open</button>
                  <div className="mintinfo d-flex justify-content-between align-items-center">
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para2">Nos. Minted :</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">Your Balance :</p>
                      </div>
                    </div>
                    <div className="mainifo">
                      <div className="info mt-4">
                        <p className="table-para5">0/1000</p>
                      </div>
                      <div className="info mt-4">
                        <p className="table-para2">$ 0 CHOO</p>
                      </div>
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
    </section>
  );
}
