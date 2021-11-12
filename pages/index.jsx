import dataFeatured from "../data/featured.json"
import dataTrending from "../data/trending.json"
import dataUsers from "../data/users.json"
import dataNfts from "../data/nfts.json"
import { useState, useEffect } from "react"
import Header from "../src/components/header/Header.jsx"
import Featured from "../src/components/featured/Featured.jsx"
import Trending from "../src/components/trending/Trending.jsx"
import TopCollectors from "../src/components/collectors/TopCollectors.jsx"
import How from "../src/components/how/How.jsx"
import Auctions from "../src/components/auctions/Auctions.jsx"
import Footer from "../src/components/footer/footer.jsx"

export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [topCollectors, setTopCollectors] = useState([]);
  const [auctionsCards, setAuctionsCards] = useState([]);

  useEffect(() => {
    setFeaturedCards(dataFeatured)
    setTrendingCards(dataTrending)
    setTopCollectors(dataUsers)
    setAuctionsCards(dataNfts)
  }, []);

  let how = {
    title: "How it works",
    description: `Discover, collect, and sell extraordinary NFTs
        on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.`,
    items: [
      {
        title: "Digital Currency",
        description:
          "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
      },
      {
        title: "Crypto Wallet",
        description:
          "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
      },
      {
        title: "BUM.",
        description:
          "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space.",
      },
    ],
    link: "https://app.boom.dev/"
  }

  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards} />
      <TopCollectors collectors={topCollectors.sort(function (a, b) { return b - a })} />
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      <Auctions cards={auctionsCards} />
      <Footer />
    </>
  )
}
