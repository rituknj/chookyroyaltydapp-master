import React, { useEffect, useState } from "react";
// import Dogimage from "./Images/chooky-wink1.gif";
// import bg from "../Components/Images/Chooky-Home-2.png";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Mobilenav from "./Mobilenav";
import "./Mobilemain.css";
import "../App.css";
import toast, { Toaster } from "react-hot-toast";
import {
  Tier1holders,
  Tier2holders,
  Tier3holders,
  Tier4holders,
  TierBalance,
  tokenBalance,
  Claimroyalty,
  stakeChooky,
  ChookyholderDetails,
  GetChainId,
  unstakestakeChooky,
} from "./../Connection_Web3/Wallet";

// import Navbar from "./Navbar";

const notify = (msg) => toast.success(msg);
const warn = (msg) => toast.error(msg);

export default function Mobilemain({
  account,
  Dissconnect,
  Metamask,
  WalletC,
}) {

  const current = new Date().getTime();
  const [show3, setShow3] = useState(0);

  const [holder1, setHolder1] = useState(0);
  const [holder2, setHolder2] = useState(0);
  const [holder3, setHolder3] = useState(0);
  const [holder4, setHolder4] = useState(0);
  const [tier1, setTier1] = useState(0);
  const [tier2, setTier2] = useState(0);
  const [tier3, setTier3] = useState(0);
  const [tier4, setTier4] = useState(0);
  const [balance, setBalance] = useState(0);
  const [lasttime, setLastTime] = useState(0);
  const [totalclaim, setTotalClaim] = useState(false);
  const [tier, setTier] = useState(0);
  const [amount, setAmount] = useState(0);
  const [userStakeBalance, setUserStakeBalance] = useState(0);

  useEffect(() => {
    const init = async () => {
      const id = await GetChainId();
      console.log(id, "ID is");
      if (Number(id) != 5) {
        return;
      }

      console.log("Running");
      const one = await Tier1holders();
      setHolder1(one);

      const two = await Tier2holders();
      setHolder2(two);

      const three = await Tier3holders();
      setHolder3(three);

      const four = await Tier4holders();
      setHolder4(four);

      const tierbal = await TierBalance();
      console.log(tierbal);
      setTier4(tierbal[3] / 10 ** 18);
      setTier3(tierbal[2] / 10 ** 18);
      setTier2(tierbal[1] / 10 ** 18);
      setTier1(tierbal[0] / 10 ** 18);

      const bal = await tokenBalance();
      setBalance(bal);

      // const last = await lastTimeClaim()
      // setLastTime(last)

      const userdata = await ChookyholderDetails();
      console.log("User Details", userdata);
      setLastTime(Number(userdata[5]) * 1000);
      setTotalClaim(userdata[4] / 10 ** 18);
      setTier(userdata[1]);
      setUserStakeBalance(userdata[2] / 10 ** 18);
    };

    init();
    setInterval(() => {
      init();
    }, 4000);
  }, [account, balance]);

  const claim = async () => {
    const data = await Claimroyalty();
    if (data.status) {
      notify("Claim successful!");
      const bal = await tokenBalance();
      setBalance(bal);
    }
  };

  const stake = async () => {
    if (5250000 > amount) {
      warn(
        "Minimum lock amount for ETH rewards is 5250000 $CHOO or 0.25% of total supply."
      );
      return;
    }
    const data = await stakeChooky(amount);
    console.log(data.status, data);
    if (data.status) {
      notify("$CHOO locked successfully!");
      const bal = await tokenBalance();
      setBalance(bal);
    }
  };

  const unstake = async () => {
    const data = await unstakestakeChooky();
    if (data.status) {
      notify("$CHOO unlocked successfully!");
      const bal = await tokenBalance();
      setBalance(bal);
    }
  };
  function romanize(num) {
    var lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      },
      roman = "",
      i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

  return (
    <section>
      <div className="background">
        <Mobilenav
          account={account}
          Dissconnect={Dissconnect}
          Metamask={Metamask}
          WalletC={WalletC}
        />
        <div className="container">
          <div>
            <div className="row section-top">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12  ">
                <div className=" card1">
                  <div className="area">
                    <h3>Tier I Pool</h3>
                    <span> {tier1.toFixed(5)} ETH </span>
                    <br />
                    <br />
                    <span>Holders: {holder1}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                <div className=" card1">
                  <div className="area ">
                    <h3>Tier II Pool</h3>
                    <span> {tier2.toFixed(5)} ETH</span>
                    <br />
                    <br />
                    <span>Holders: {holder2}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                <div className=" card1">
                  <div className="area ">
                    <h3>Tier III Pool</h3>
                    <span> {tier3.toFixed(5)} ETH</span>
                    <br />
                    <br />
                    <span>Holders: {holder3}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                <div className=" card1">
                  <div className="area ">
                    <h3>Tier IV Pool</h3>
                    <span> {tier4.toFixed(5)} ETH</span>
                    <br />
                    <br />
                    <span>Holders: {holder4}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row stakedfield main-new-table-choo">
              {" "}
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                {" "}
                <input type="text" className="input-field" />{" "}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 ">
                {" "}
                <button
                  className="claim-bu1"
                  // id="staked-more staked-more1 button-claim"
                  onClick={() => {
                    stake();
                    setShow3(2);
                  }}
                >
                  {show3 === 2 > 0 ? "      ADD MORE " : "LOCK $CHOO"}
                </button>{" "}
                {/*   {show3 === 2 ? (
                  <button className="claim-bu1" id="staked-more unstaked">
                    UNSTAKE
                  STAKE
                </button>{" "} */}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 ">
                {userStakeBalance > 0 ? (
                  <button
                    className="claim-bu1"
                    // id="staked-more unstaked"
                    onClick={() => unstake()}
                  >
                    UNLOCK $CHOO
                  </button>
                ) : (
                  ""
                )}
                </div>
            
            </div>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para" style={{ fontWeight: "700" }}>
                    Your Wallet Balance :
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content d-flex">
                  <p className="table-para">{balance}</p>
                  <span className="table-para-chooky"> $CHOO</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para" style={{ fontWeight: "700" }}>
                    Your Locked Balance :
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para">{userStakeBalance} &nbsp; $CHOO</p>
                </div>
              </div>
            </div>
            {tier == "-1" ? (
              ""
            ) : (
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  {" "}
                  <div className="main-content">
                    <p className="table-para" style={{ fontWeight: "700" }}>
                      Your Tier :
                    </p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-6 col-6">
                  {" "}
                  <div className="main-content">
                    <p className="table-para">{romanize(Number(tier) + 1)}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para" style={{ fontWeight: "700" }}>
                    Last Claim Time :
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para">
                    {lasttime == 0
                      ? "00/00/0000, 00:00:00"
                      : new Date(lasttime).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para" style={{ fontWeight: "700" }}>
                    Next Claim Time :
                  </p>
                </div>
              </div>
              <div className="col-lg-8   col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para">
                    {lasttime == 0
                      ? "00/00/0000, 00:00:00"
                      : new Date(lasttime + 1209600000).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para" style={{ fontWeight: "700" }}>
                    Total Claimed Till Date :
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para">
                    {" "}
                    {Number(totalclaim).toFixed(9)} ETH
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para" style={{ fontWeight: "700" }}>
                    Claimable Amount :
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-6">
                {" "}
                <div className="main-content">
                  <p className="table-para">
                    {tier == "-1"
                      ? "0"
                      : tier == "0"
                      ? isNaN(Number(tier1) / Number(holder1))
                        ? "0"
                        : (Number(tier1) / Number(holder1)).toFixed(5)
                      : tier == "1"
                      ? isNaN(Number(tier2) / Number(holder2))
                        ? "0"
                        : (Number(tier2) / Number(holder2)).toFixed(5)
                      : tier == "2"
                      ? isNaN(Number(tier3) / Number(holder3))
                        ? "0"
                        : (Number(tier3) / Number(holder3)).toFixed(5)
                      : isNaN(Number(tier4) / Number(holder4))
                      ? "0"
                      : (Number(tier4) / Number(holder4)).toFixed(5)}{" "}
                    ETH{" "}
                  </p>
                </div>
                {/*   <div className="main-content">
                  <p className="table-para">
                    {tier == "0"
                      ? isNaN(Number(tier1) / Number(holder1))
                        ? "0"
                        : (Number(tier1) / Number(holder1)).toFixed(5)
                      : tier == "1"
                      ? isNaN(Number(tier2) / Number(holder2))
                        ? "0"
                        : (Number(tier2) / Number(holder2)).toFixed(5)
                      : tier == "2"
                      ? isNaN(Number(tier3) / Number(holder3))
                        ? "0"
                        : (Number(tier3) / Number(holder3)).toFixed(5)
                      : isNaN(Number(tier4) / Number(holder4))
                      ? "0"
                      : (Number(tier4) / Number(holder4)).toFixed(5)}{" "}
                    ETH
                  </p>
                </div> */}
              </div>
              <div className="col-12">
                {" "}
                {lasttime != 0 && lasttime + 60000 < current ? (
                      <button            className="claim-bu1"
                      id="staked-more staked-more1 button-claim" onClick={() => claim()}>
                        CLAIM
                      </button>
                    ) : (
                      ""
                    )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="header-foot1">
              <h1 className="header-footer">
                Join the most energetic crypto community that is ...{" "}
              </h1>
            </div>
          </div>
          <div>
            <h2 className="design-font design-font-choo"># CHOOKY</h2>
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
              <BsTwitter className="twitter-icons" />
            </a>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
