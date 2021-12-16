import Header from "../../../src/components/header/Header.jsx"
import ProfileHero from "../../../src/components/profile/ProfileHero.jsx"
import ProfileUser from "../../../src/components/profile/ProfileUser.jsx"
import ProfileCollection from "../../../src/components/profile/ProfileCollection.jsx"
import Footer from "../../../src/components/footer/Footer.jsx"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Profile() {
    const [profile, setProfile] = useState()
    const [profileFilters, setProfileFilters] = useState()
    const [sort, setSort] = useState(0);
    const [price, setPrice] = useState(0);
    const router = useRouter()
    const { id } = router.query

    useEffect(async () => {
        let url = ""
        if (sort != 0 && price != 0) {
            url = `${process.env.apiUrl}/users/${id}/?sort=${sort}&price=${price}`
        } else if (sort != 0) {
            url = `${process.env.apiUrl}/users/${id}?sort=${sort}`
        } else if (price != 0) {
            url = `${process.env.apiUrl}/users/${id}?price=${price}`
        }else{
            url = `${process.env.apiUrl}/users/${id}`
        }

        const response = await fetch(url);
        if (response.status == 200) {
            const user = await response.json();
            setProfile(user.user)
            setProfileFilters(user.filters)
        }
    }, [id, sort, price]);

    return (
        <>
            <Header />
            {profile && <ProfileHero image={profile.avatar.backgroundUrl} />}
            {profile && <ProfileUser name={profile.username} avatar={profile.avatar.url} verified={profile.verified} info={profile.info} />}
            {profileFilters && profile && <ProfileCollection filters={profileFilters} items={profile.nfts} user={profile} setSort={setSort} setPrice={setPrice} />}
            <Footer />
        </>
    )
}