import Header from "../header/Header.jsx"
import Footer from "../footer/footer.jsx"
import Trending from "../trending/Trending.jsx"
import Card from "../card/Card.jsx"
import Auctions from "../auctions/Auctions.jsx"
import How from "../how/How.jsx"

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

export default function HomeComponent() {
  return (
    <>
      <Header />
      {/* <Card name="Clock" likes={1100} mediaUrl="/images/nft.jpg" user={{avatarUrl: "/images/avatar.png", verified: true}} price= "12.2" currency="ETH" timeLeft={3.6e6}/> */}
      {/* <Auctions cards={cards}/> */}
      <br />
      <br />
      <How title={component.title} description={component.description} items={component.items} link={component.link} />
      <Footer />
    </>
  );
}
