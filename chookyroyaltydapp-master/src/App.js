import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import { BrowserView, MobileView } from "react-device-detect";
import Mobilenav from "./Mobile/Mobilenav";
import Mobilemain from "./Mobile/Mobilemain";
import {
  DissconnectWallet,
  GetChainId,
  getUserAddress,
  MetaMasklogin,
  WalletConnect,
} from "./Connection_Web3/Wallet";
import { useEffect, useState } from "react";
import Home from "./Components/pages/Home";
import Mint from "./Components/pages/Mint";
import Stake from "./Components/pages/Stake";
import Footer from "./Components/Footer";

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        await Metamask();
      }
      const id = await GetChainId();
      console.log(id);
      if (Number(id) != 5) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }], // chainId must be in hexadecimal numbers
        });
      }
    };

    init();
  }, []);

  const WalletC = async () => {
    await WalletConnect();
    const add = await getUserAddress();
    setAccount(add);
  };

  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    window.localStorage.setItem("wallet", "wallet");
    setAccount(add);
  };
  const Dissconnect = async () => {
    await DissconnectWallet();
    setAccount(undefined);

    window.localStorage.removeItem("wallet");
  };

  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      setAccount(accounts[0]);
    });
  } catch (error) {}

  try {
    window.ethereum.on("chainChanged", function () {
      window.location.reload();
    });
  } catch (error) {}

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                account={account}
                Dissconnect={Dissconnect}
                Metamask={Metamask}
                WalletC={WalletC}
              />
              // <>
              //   <BrowserView>
              //     <Home
              //       account={account}
              //       Dissconnect={Dissconnect}
              //       Metamask={Metamask}
              //       WalletC={WalletC}
              //     />
              //   </BrowserView>
              //   <MobileView>
              //     <Mobilemain
              //       account={account}
              //       Dissconnect={Dissconnect}
              //       Metamask={Metamask}
              //       WalletC={WalletC}
              //     />
              //   </MobileView>
              // </>
            }
          />

          <Route
            path="/mint"
            element={
              <Mint
                account={account}
                Dissconnect={Dissconnect}
                Metamask={Metamask}
                WalletC={WalletC}
              />
            }
          />
          <Route
            path="/stake"
            element={
              <Stake
                account={account}
                Dissconnect={Dissconnect}
                Metamask={Metamask}
                WalletC={WalletC}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
