import Header from "../../../src/components/header/Header.jsx"
import ProfileHero from "../../../src/components/profile/ProfileHero.jsx"
import ProfileUser from "../../../src/components/profile/ProfileUser.jsx"
import ProfileCollectionFilters from '../../../src/components/profile/ProfileCollectionFilters.jsx';
import Footer from "../../../src/components/footer/Footer.jsx"

export default function Profile() {
    return (
        <>
            <Header />
            <ProfileHero image={"/images/nft.jpg"} />
            <ProfileUser name={"Fon40"} info={"Tarikata"} avatar={"/images/avatar.png"} verified={true} />
            <ProfileCollectionFilters filters={{"sort":[{"label":"Name (Ascending)","value":1},{"label":"Name (Descending)","value":2},{"label":"Price (Ascending)","value":4},{"label":"Price (Descending)","value":5}],"price":[{"label":"0.3 - 0.5 ETH","value":6},{"label":"0.5 - 2 ETH","value":7},{"label":"2- 3 ETH","value":8}]}} />
            <Footer />
        </>
    )
}