import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero Section/Hero";
import Section from './Components/Main Section/Demo';
import List from "./Components/Main Section/List";
import compoundImg from "./assets/compound.png";
import etherImage from "./assets/ether.png";
import bitcoinImg from "./assets/bitcoin.png";
import uniswapImg from "./assets/uniswap.png";
import chainlinkImg from "./assets/chainlink.png";
import Footer from './Components/Footer/Footer';


function App() {

  const ETH = <b>{"ETH Supply Cap "}</b>;
  const WBTC = <b>{"WBTC Supply Cap "}</b>;
  const COMP = <b>{"COMP Supply Cap "}</b>;
  const UNI = <b>{"UNI Supply Cap "}</b>;
  const LINK = <b>{"LINK Supply Cap "}</b>;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section />
      <div>
        <List Logo={etherImage} assetData="Ether" assetSubData="ETH" supplyData="$224.57M" supplyProgress={60} toolTipData={ETH} capital="$678.01M" price="$477.79M" coin="ETH" oracleData="$1,950.22" reserveData="	$0.00" collateralFactData="83%" liquidationFactData="	90%" liquidationPenData="5%"/>
        <List Logo={bitcoinImg} assetData="Wrapped Bitcoin" assetSubData="WBTC" supplyData="$217.89M" supplyProgress={35} toolTipData={WBTC} capital="$369.79M" price="$141.41M" coin="WBTC" oracleData="$30,900.60" reserveData="$0.03" collateralFactData="70%" liquidationFactData="77%" liquidationPenData="5%"/>
        <List Logo={compoundImg} assetData="Compound" assetSubData="COMP" supplyData="$56.90M" supplyProgress={97} toolTipData={COMP} capital="$57.54M" price="$882.81K" coin="COMP" oracleData="$64.20" reserveData="$0.02" collateralFactData="65%" liquidationFactData="70%" liquidationPenData="12%"/>
        <List Logo={uniswapImg} assetData="Uniswap" assetSubData="UNI" supplyData="$12.28M" supplyProgress={97} toolTipData={UNI} capital="$12.87M" price="$295.85K" coin="UNI" oracleData="$5.46" reserveData="$0.00" collateralFactData="75%" liquidationFactData="	81%" liquidationPenData="7%"/>
        <List Logo={chainlinkImg} assetData="Chainlink" assetSubData="LINK" supplyData="$4.67M" supplyProgress={55} toolTipData={LINK} capital="$8.18M" price="$3.51M" coin="LINK" oracleData="$6.46" reserveData="$0.00" collateralFactData="79%" liquidationFactData="85%" liquidationPenData="7%"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
