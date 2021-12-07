import Header from "../../../src/components/header/Header.jsx"
import ProfileHero from "../../../src/components/profile/ProfileHero.jsx"
import ProfileUser from "../../../src/components/profile/ProfileUser.jsx"
import ProfileCollection from "../../../src/components/profile/ProfileCollection.jsx"
import dataProfile from "../../../data/profile.json"
import Footer from "../../../src/components/footer/Footer.jsx"

export default function Profile() {
    const filters = {
        "sort": [
            {
                "label": "Date (Ascending)",
                "value": 1
            },
            {
                "label": "Date (Descending)",
                "value": 2
            },
            {
                "label": "Name (Ascending)",
                "value": 3
            },
            {
                "label": "Name (Descending)",
                "value": 4
            },
            {
                "label": "Price (Ascending)",
                "value": 5
            },
            {
                "label": "Price (Descending)",
                "value": 6
            }
        ],
        "price": [
            {
                "label": "0 - 0.01 ETH",
                "value": 7
            },
            {
                "label": "0.01 - 0.04 ETH",
                "value": 8
            },
            {
                "label": "0.04 - 0.07 ETH",
                "value": 9
            }
        ]
    }

    return (
        <>
            <Header />
            <ProfileHero image={dataProfile?.avatar?.backgroundUrl} />
            <ProfileUser name={dataProfile?.username} info={dataProfile?.info} avatar={dataProfile?.avatar?.url} verified={dataProfile?.verified} />
            <ProfileCollection filters={filters} user={dataProfile} items={dataProfile?.nfts} />
            <Footer />
        </>
    )
}