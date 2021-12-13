import dataActivity from "../../data/activity.json"
import Header from "../../src/components/header/Header.jsx"
import Hero from "../../src/components/hero/Hero.jsx"
import ActivityFilters from "../../src/components/activity/ActivityFilters.jsx";
import ActivityList from "../../src/components/activity/ActivityList.jsx";
import Footer from "../../src/components/footer/Footer.jsx"
import { useEffect, useState } from "react"

export default function Activity() {
    const [activity, setActivity] = useState()
    const [activityFilters, setActivityFilters] = useState()
    const [sort, setSort] = useState(0)
    const [type, setType] = useState(0)

    useEffect(async () => {
        let url = ""
        if (sort != 0 && type != 0) {
            url = `${process.env.apiUrl}/activities?sort=${sort}&type=${type}`
        } else if (sort != 0) {
            url = `${process.env.apiUrl}/activities?sort=${sort}`
        } else if (type != 0) {
            url = `${process.env.apiUrl}/activities?type=${type}`
        } else {
            url = `${process.env.apiUrl}/activities`
        }

        const response = await fetch(url);
        if (response.status == 200) {
            const data = await response.json();
            setActivity(data.activities);
            setActivityFilters(data.filters);
        }
    }, [sort, type])

    return (
        <>
        {console.log(sort, type)}
            <Header />
            <Hero text={"Activity"} />
            {activityFilters && <ActivityFilters filters={activityFilters} setSortBy={setSort} setType={setType}/>}
            {activity && <ActivityList items={activity} />}
            <Footer />
        </>
    )
}