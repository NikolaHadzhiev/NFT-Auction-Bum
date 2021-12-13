import dataActivity from "../../data/activity.json"
import Header from "../../src/components/header/Header.jsx"
import Hero from "../../src/components/hero/Hero.jsx"
import ActivityFilters from "../../src/components/activity/ActivityFilters.jsx";
import ActivityList from "../../src/components/activity/ActivityList.jsx";
import Footer from "../../src/components/footer/Footer.jsx"

export default function Activity() {
    return (
        <>
            <Header />
            <Hero text={"Activity"}/>
            <ActivityFilters filters={{ "sort": [{ "label": "Name (Ascending)", "value": 1 }, { "label": "Name (Descending)", "value": 2 }], "type": [{ "label": "Liked", "value": 3 }, { "label": "Bought", "value": 4 }] }} />
            <ActivityList items={dataActivity}/>
            <Footer />
        </>
    )
}