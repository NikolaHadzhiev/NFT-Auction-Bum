import Header from "../header/Header.jsx"
import Footer from "../footer/footer.jsx"
import User from "../user/User.jsx"

export default function HomeComponent() {
  return (
    <>
      <Header />
      <User name={'terika77'} info={'134 Items'} avatar={'/images/avatar.png'} verified={true} />
      <Footer />
    </>
  );
}
