import { useState, useEffect } from "react"
import Header from "../src/components/header/Header.jsx"
import Featured from "../src/components/featured/Featured.jsx"
import Trending from "../src/components/trending/Trending.jsx"
import TopCollectors from "../src/components/collectors/TopCollectors.jsx"
import How from "../src/components/how/How.jsx"
import Auctions from "../src/components/auctions/Auctions.jsx"
import Footer from "../src/components/footer/Footer.jsx"

export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [topCollectors, setTopCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);
  const [auctionsCards, setAuctionsCards] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);
  const [period, setPeriod] = useState(0);
  const [topCollectorsSort, setTopCollectorsSort] = useState(0);
  const [liveAuctionsPrice, setLiveAuctionsPrice] = useState(0);

  useEffect(async () => {
    const dataFeatured = await fetch(`${process.env.apiUrl}/featured`).then((response) => response.json());
    const dataTrending = await fetch(`${process.env.apiUrl}/trending`).then((response) => response.json());
    const dataCollectors = await fetch(`${process.env.apiUrl}/top-collectors`).then((response) => response.json());
    const dataAuction = await fetch(`${process.env.apiUrl}/live-auctions`).then((response) => response.json());

    dataFeatured.nfts[0]["rows"] = 2;
    dataFeatured.nfts[0]["cols"] = 3;
    dataCollectors.users.sort(function (a, b) {
      return b.nfts.length - a.nfts.length;
    })

    setFeaturedCards(dataFeatured);
    setTrendingItems(dataTrending.nfts);
    setTrendingFilters(dataTrending.filters.sort);
    setTopCollectors(dataCollectors.users);
    setCollectorFilters(dataCollectors.filters.sort);
    setAuctionsCards(dataAuction.nfts)
    setAuctionFilters(dataAuction.filters.price)
  }, []);

  useEffect(async () => {
    if (period != 0) {
      let url = `${process.env.apiUrl}/trending?sort=${period}`
      const response = await fetch(url);
      if (response.status == 200) {
        const data = await response.json();
        setTrendingItems(data.nfts);
      }
    }
  }, [period])

  useEffect(async () => {
    if (topCollectorsSort != 0) {
      let url = `${process.env.apiUrl}/top-collectors?sort=${topCollectorsSort}`
      const response = await fetch(url);
      if (response.status == 200) {
        const data = await response.json();
        setTopCollectors(data.users);
      }
    }
  }, [topCollectorsSort])

  useEffect(async () => {
    if (liveAuctionsPrice != 0) {
      let url = `${process.env.apiUrl}/live-auctions?sort=${liveAuctionsPrice}`
      const response = await fetch(url);
      if (response.status == 200) {
        const data = await response.json();
        setAuctionsCards(data.nfts);
      }
    }
  }, [liveAuctionsPrice])

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
      {featuredCards && <Featured items={featuredCards.nfts} />}
      {/* {trendingItems && <Trending cards={trendingItems} filters={trendingFilters} setPeriod={setPeriod} />}
      {topCollectors && <TopCollectors collectors={topCollectors} filters={collectorFilters} setTopCollectorsSort={setTopCollectorsSort} />}
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      {auctionsCards && <Auctions cards={auctionsCards} filters={auctionFilters} setLiveAuctionsPrice={setLiveAuctionsPrice}/>} */}
      <Footer />
    </>
  )
}
