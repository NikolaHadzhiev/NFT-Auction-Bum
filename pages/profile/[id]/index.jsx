import Header from "../../../src/components/header/Header.jsx"
import ProfileHero from "../../../src/components/profile/ProfileHero.jsx"
import Footer from "../../../src/components/footer/Footer.jsx"

export default function Profile() {
    return (
        <>
            <Header />
            <ProfileHero image={"/images/nft.jpg"} />
            <Footer />
        </>
    )
}