import Header from "../header/Header.jsx"
import Footer from "../footer/footer.jsx"
import Trending from "../trending/Trending.jsx"
import Card from "../card/Card.jsx"
import Auctions from "../auctions/Auctions.jsx"
import How from "../how/How.jsx"
import Featured from "../featured/Featured.jsx"

let cards = [
  {
    name: "Clock",
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
  },
]

let component = {
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

export default function HomeComponent() {
  return (
    <>
      <Header />
      {/* <Card name="Clock" likes={1100} mediaUrl="/images/nft.jpg" user={{avatarUrl: "/images/avatar.png", verified: true}} price= "12.2" currency="ETH" timeLeft={3.6e6}/> */}
      {/* <Auctions cards={cards}/> */}
      <br />
      <Featured items={items}/>
      {/* <How title={component.title} description={component.description} items={component.items} link={component.link} /> */}
      <Footer />
    </>
  );
}
