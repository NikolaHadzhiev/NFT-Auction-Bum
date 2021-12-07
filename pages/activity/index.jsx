import Header from "../../src/components/header/Header.jsx"
import ActivityFilters from "../../src/components/activity/ActivityFilters.jsx";
import Footer from "../../src/components/footer/Footer.jsx"

export default function Index() {
    return (
        <>
            <Header />
            <ActivityFilters filters={{ "sort": [{ "label": "Name (Ascending)", "value": 1 }, { "label": "Name (Descending)", "value": 2 }], "type": [{ "label": "Liked", "value": 3 }, { "label": "Bought", "value": 4 }] }} />
            <Footer />
        </>
    )
}