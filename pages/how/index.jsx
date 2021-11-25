import Header from "../../src/components/header/Header.jsx"
import Hero from '../../src/components/hero/Hero.jsx'
import Description from "../../src/components/description/Description.jsx"
import Footer from "../../src/components/footer/footer.jsx"

export default function How() {

    const how = {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        image: "/images/nft.jpg"
    }
    return (
        <>
            <Header />
                <Hero text={"How it works"} />
                <Description text={how.text} image={how.image} />
            <Footer />
        </>
    )
}