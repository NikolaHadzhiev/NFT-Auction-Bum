import Header from "../header/Header.jsx"
import Footer from "../footer/footer.jsx"
import Trending from "../trending/Trending.jsx"
import Card from "../card/Card.jsx"
import Auctions from "../auctions/Auctions.jsx"

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

export default function HomeComponent() {
  return (
    <>
      <Header />
      {/* <Card name="Clock" likes={1100} mediaUrl="/images/nft.jpg" user={{avatarUrl: "/images/avatar.png", verified: true}} price= "12.2" currency="ETH" timeLeft={3.6e6}/> */}
      <Auctions cards={cards}/>
      <Footer />
    </>
  );
}
