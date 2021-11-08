import dataFeatured from "../data/featured.json"
import dataTrending from "../data/trending.json"
import dataUsers from "../data/users.json"
import dataNfts from "../data/nfts.json"
import { useState, useEffect, useRef } from "react"
import Header from "../src/components/header/Header.jsx"
import Featured from "../src/components/featured/Featured.jsx"
import Trending from "../src/components/trending/Trending.jsx"
import TopCollectors from "../src/components/collectors/TopCollectors.jsx"
import How from "../src/components/how/How.jsx"
import Auctions from "../src/components/auctions/Auctions.jsx"
import Footer from "../src/components/footer/footer.jsx"
import ProductImage from "../src/components/product/ProductImage.jsx"
import ProductInfoTitle from "../src/components/product/ProductInfoTitle.jsx"
import ProductInfoPrice from "../src/components/product/ProductInfoPrice.jsx"
import ProductInfoStatus from "../src/components/product/ProductInfoStatus.jsx"
import ProductInfoLikes from "../src/components/product/ProductInfoLikes.jsx"



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

  let items = [
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
      title: "Burger",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
      title: "Camera",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
      title: "Coffee",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
      title: "Hats",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
      title: "Honey",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
      title: "Basketball",
      href: "/about",
    },
  ]

  let cards = [
    {
      name: "Clock",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 12.2,
      currency: "ETH",
    },
    {
      name: "Riddles",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 10.1,
      currency: "ETH",
    },
    {
      name: "Wandering Flame",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 5.5,
      currency: "ETH",
    },
    {
      name: "Glorious Curtain",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 0.1,
      currency: "ETH",
    },
  ]

  let collectros = [
    {
      name: "Peter",
      nftsCount: 12312,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "John",
      nftsCount: 1111,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Steven",
      nftsCount: 52,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }
  ]

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

  let auctions = [
    {
      name: "Something",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 12.2,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Riddles",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 10.1,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Wandering Flame",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 5.5,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Glorious Curtain",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 0.1,
      currency: "ETH",
      timeLeft: 3.6e6
    }]

  return (
    <>
      <Header />
      {/* <Featured items={items} />
      <Trending cards={cards} />
      <TopCollectors collectors={collectros} />
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      <Auctions cards={auctions} /> */}
      <div style={{ position: "relative" }}>
        <ProductImage url={"/images/nft.jpg"} />
        <ProductInfoTitle text={"Shallow Son"} />
        <ProductInfoPrice amount={3} currency={"ETH"} />
        <ProductInfoStatus />
        <ProductInfoLikes amount={1110} />
      </div>
      <Footer />
    </>
  )
}
