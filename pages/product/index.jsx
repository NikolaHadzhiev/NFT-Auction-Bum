import Header from "../../src/components/header/Header.jsx"
import ProductImage from "../../src/components/product/ProductImage.jsx"
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle.jsx"
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice.jsx"
import ProductInfoStatus from "../../src/components/product/ProductInfoStatus.jsx"
import ProductInfoLikes from "../../src/components/product/ProductInfoLikes.jsx"
import Footer from "../../src/components/footer/footer.jsx"

export default function Product() {
    return (
        <>
            <Header />
            <div style={{ position: "relative" }}>
                <ProductImage url={"/images/nft.jpg"} />
                <ProductInfoTitle text={"Shallow Son"} />
                <ProductInfoPrice amount={3} currency={"ETH"} />
                <ProductInfoStatus />
                <ProductInfoLikes amount={1110} />
            </div>
            <Footer />
        </>
    )
}