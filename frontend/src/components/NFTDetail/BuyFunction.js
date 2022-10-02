import axios from 'axios';
import Web3 from 'web3';
import SaleFactory from '../../json/SaleFactory.json';
import Sale from '../../json/Sale.json';
import IERC20 from '../../json/IERC20.json';

async function BuyFunction(price, tokenId, nftAddress) {
  const tokenCA = process.env.REACT_APP_SSF_CONTRACT_ADDRESS;
  const saleFactoryCA = process.env.REACT_APP_SALE_CONTRACT_ADDRESS;

  const web3 = new Web3(window.ethereum);
  const tokenABI = IERC20.abi;
  const tokenContract = new web3.eth.Contract(tokenABI, tokenCA);
  const saleFactoryABI = SaleFactory.abi;
  const saleFactoryContract = new web3.eth.Contract(saleFactoryABI, saleFactoryCA);
  const saleABI = Sale.abi;

  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const userAddress = accounts[0]; // 사용자의 지갑 주소

  const getSaleContract = saleAddress => {
    const SaleContract = new web3.eth.Contract(saleABI, saleAddress);
    return SaleContract;
  };

  // sale컨트랙트 주소로 해당 컨트랙트 가져오기
  const saleCA = await saleFactoryContract.methods.getSaleContractAddress(tokenId).call();
  const saleContract = getSaleContract(saleCA);

  // sale컨트랙트로 erc20토큰 전송권한 허용
  await tokenContract.methods.approve(saleCA, price).send({ from: userAddress });

  // 구매 요청
  await saleContract.methods.purchase(price).send({ from: userAddress });

  // 판매 기록 API 호출 - 수정 필요
  axios.post('https://j7a508.p.ssafy.io/api/sale', {
    nftAddress,
    buyerWalletAddress: userAddress,
    saleContractAddress: saleCA,
  });
}

export default BuyFunction;
