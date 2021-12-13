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
    const router = useRouter()
    const { id } = router.query

    useEffect(async () => {
        const response = await fetch(`${process.env.apiUrl}/users/${id}`);
        if (response.status == 200) {
            const user = await response.json();
            setProfile(user.user)
            setProfileFilters(user.filters)
        }
    }, [id]);

    return (
        <>
            <Header />
            {console.log(profileFilters)}
            {profile && <ProfileHero image={profile.avatar.backgroundUrl} />}
            {profile && <ProfileUser name={profile.username} avatar={profile.avatar.url} verified={profile.verified} info={profile.info} />}
            {profileFilters && profile && <ProfileCollection filters={profileFilters} items={profile.nfts} user={profile} />}
            <Footer />
        </>
    )
}