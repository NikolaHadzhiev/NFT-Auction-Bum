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

    useEffect(async () => {
        const response = await fetch(`${process.env.apiUrl}/activities`);
            if (response.status == 200) {
                const data = await response.json();
                setActivity(data.activities);
                setActivityFilters(data.filters);
            }
      }, [])

    return (
        <>
            <Header />
            <Hero text={"Activity"}/>
            {activityFilters && <ActivityFilters filters={activityFilters} />}
            {activity && <ActivityList items={activity} />}
            <Footer />
        </>
    )
}