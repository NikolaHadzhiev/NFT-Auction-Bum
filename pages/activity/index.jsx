import Header from "../../src/components/header/Header.jsx"
import ActivityFilters from "../../src/components/activity/ActivityFilters.jsx";
import ActivityListItem from "../../src/components/activity/ActivityListItem.jsx";
import Footer from "../../src/components/footer/Footer.jsx"

export default function Index() {
    const data = {
        "created_at":"2021-10-22T08:29:23.382Z",
        "user":{
           "avatarUrl":"/images/avatar.png",
           "verified":"true",
           "name":"Cupcat NFT"
        },
        "nft":{
           "name":"Dog Bone",
           "user":{
              "name":"Antonio Banderas",
              "avatarUrl":"String",
              "verified":"Boolean"
           }
        },
        "type":"like"
       }

    return (
        <>
            <Header />
            <ActivityFilters filters={{ "sort": [{ "label": "Name (Ascending)", "value": 1 }, { "label": "Name (Descending)", "value": 2 }], "type": [{ "label": "Liked", "value": 3 }, { "label": "Bought", "value": 4 }] }} />
            <ActivityListItem {...data}/>
            <Footer />
        </>
    )
}