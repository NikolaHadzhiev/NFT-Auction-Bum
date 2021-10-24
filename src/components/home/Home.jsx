import Header from "../header/Header.jsx"
import Footer from "../footer/footer.jsx"
import Card from "../card/Card.jsx"

export default function HomeComponent() {
  return (
    <>
      <Header />
      <br />
      <Card name="Clock" likes={1100} mediaUrl="/images/nft.jpg" user={{avatarUrl: "/images/avatar.png", verified: true}} price= "12.2" currency="ETH"/>
      <Footer />
    </>
  );
}
