import Web3 from 'web3/dist/web3.min.js'
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import { Staking, StakingAddress, tokenaddress, token } from './Credentials'


let web3


var provider = new WalletConnectProvider({
  rpc: {
    56: 'https://bsc-dataseed1.ninicoin.io',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    1: 'https://mainnet.infura.io/v3/',
    // ...
  },
  bridge: 'https://bridge.walletconnect.org',
})


export const WalletConnect = async () => {
  try {
    await provider.disconnect()
    const data = await provider.enable()
    web3 = new Web3(provider)
  } catch (error) {
    console.log(error)
  }
}

export const DissconnectWallet = async () => {
  await provider.disconnect()
  web3 = null
}

export const MetaMasklogin = async () => {
  const data = await window.ethereum.enable()
  web3 = new Web3(window.ethereum)
  return data[0]
}

export const getUserAddress = async () => {
  try {
    const address = await web3.eth.getAccounts()
    return address[0]
  } catch (error) {
    console.log(error)
  }
}

export const getContract = async (abi, sAddress) => {
  try {
    const Contract = new web3.eth.Contract(abi, sAddress)
    return Contract
  } catch (error) {
    console.log(error)
  }
}

export const towie = async (amount) => {
  try {
    const number = await web3.utils.toWei(amount.toString(), 'ether')
    return number
  } catch (error) {
    console.log(error)
  }
}

export const GetChainId = async () => {
  try {
    const id = await web3.eth.getChainId()
    return id
  } catch (error) {}
}

export const Tier1holders =async()=>{
    try {
       const contract = await getContract(Staking,StakingAddress) 
       const data = await contract.methods.tierIHolders().call();
       return data;
    } catch (error) {
        
    }
}
export const Tier2holders =async()=>{
    try {
       const contract = await getContract(Staking,StakingAddress) 
       const data = await contract.methods.tierIIHolders().call();
       return data;
    } catch (error) {
        
    }
}
export const Tier3holders =async()=>{
    try {
       const contract = await getContract(Staking,StakingAddress) 
       const data = await contract.methods.tierIIIHolders().call();
       return data;
    } catch (error) {
        
    }
}
export const Tier4holders =async()=>{
    try {
       const contract = await getContract(Staking,StakingAddress) 
       const data = await contract.methods.tierIVHolders().call();
       return data;
    } catch (error) {
        
    }
}
export const TierBalance =async()=>{
    try {
       const contract = await getContract(Staking,StakingAddress) 
       const data = await contract.methods._tierBalances().call();
       console.log('data',data)
       return data;
    } catch (error) {
        
    }
}

export const tokenBalance = async()=>{
    try {
      const contract = new web3.eth.Contract(token, tokenaddress);
      const data = await contract.methods.balanceOf(await getUserAddress()).call();
      return data/10**18;
    } catch (error) {
      
    }
  }

export const Claimroyalty = async()=>{
    try {
      const contract = await getContract(Staking,StakingAddress) 
      const data = await contract.methods._claimRoyalty().send({from:await getUserAddress()});
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  export const lastTimeClaim = async()=>{
    try {
      const contract = await getContract(Staking,StakingAddress) 
      const data = await contract.methods.lastClaimTime(await getUserAddress()).call();
      return data;
    } catch (error) {
      
    }
  }

  export const ChookyholderDetails = async()=>{
    try {
      const contract = await getContract(Staking,StakingAddress) 
      const data = await contract.methods.chookyHolders(await getUserAddress()).call();
      return data;
    } catch (error) {
      
    }
  }

  export const stakeChooky = async(amount)=>{
    try {
      const allowamount = await Allow();
      const a = await towie(amount)
      const contract = await getContract(Staking,StakingAddress) 
      if(Number(allowamount) > 0 ){
        const data = await contract.methods._stakeChookyForRoyalty(a).send({from:await getUserAddress()});
        return data;
      }
      else{
        const allowed = await Approve()
        if(allowed.status){
          const data = await contract.methods._stakeChookyForRoyalty(a).send({from:await getUserAddress()});
          return data;
        }
      }
    } catch (error) {
      
    }
  }
  export const unstakestakeChooky = async()=>{
    try {
      const contract = await getContract(Staking,StakingAddress) 
      const data = await contract.methods._unstakeChooky().send({from:await getUserAddress()});
      return data;
    } catch (error) {
      
    }
  }

export const Approve = async () => {
  try {
    const contract = new web3.eth.Contract(token, tokenaddress);
  const data = await contract.methods
    .approve(
      StakingAddress,
      115792089237316195423570985008687907853269984665640564039457584007913129639935n,
    )
    .send({ from: await getUserAddress() })
  return data
  } catch (error) {
    console.log(error)
  }
}

export const Allow = async()=>{
  try {
    const contract = new web3.eth.Contract(token, tokenaddress);
    const data = await contract.methods.allowance(await getUserAddress(), StakingAddress).call();
    return data;
  } catch (error) {
    console.log(error)
  }
}