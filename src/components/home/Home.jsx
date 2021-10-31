import Header from "../header/Header.jsx"
import Footer from "../footer/footer.jsx"
import Trending from "../trending/Trending.jsx"

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

export default function HomeComponent() {
  return (
    <>
      <Header />
      <Trending cards={cards}/>
      <Footer />
    </>
  );
}
