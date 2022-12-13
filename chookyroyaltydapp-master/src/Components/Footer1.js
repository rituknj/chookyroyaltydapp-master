import React from 'react'
import "./Footer1.css";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer1() {
  return (
    <>
    <div className='container-fluid background'>
      <div className='element-background'>
      <div>
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
        </div> 

      </div>
    </div>
    </>
  )
}




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