import React from "react";
import Main from "../Main";

export default function Home({ account, Dissconnect, Metamask, WalletC }) {
  return (
    <div>
      <Main
        account={account}
        Dissconnect={Dissconnect}
        Metamask={Metamask}
        WalletC={WalletC}
      />
    </div>
  );
}
