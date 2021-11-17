import Header from "../../src/components/header/Header.jsx"
import ProductImage from "../../src/components/product/ProductImage.jsx"
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle.jsx"
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice.jsx"
import ProductInfoStatus from "../../src/components/product/ProductInfoStatus.jsx"
import ProductInfoLikes from "../../src/components/product/ProductInfoLikes.jsx"
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator.jsx"
import ProductInfoTimer from "../../src/components/product/ProductInfoTimer.jsx"
import ProductInfo from "../../src/components/product/ProductInfo.jsx"
import Footer from "../../src/components/footer/footer.jsx"

let product = {
    title: "John",
    creator: {
        name: "George",
        avatar:
            "https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg",
        verified: true,
    },
    price: 20,
    currency: "ETH",
    likes: 20,
    onTimeEnd: () => { },
    timeEnd: "2022-09-02T20:43:19.149Z",
    isLive: true,
}

export default function Product() {
    return (
        <>
            <Header />
            <ProductImage url={"/images/nft.jpg"} />
            <ProductInfo title={product.title} creator={product.creator} price={product.price} currency={product.currency} likes={product.likes} timeEnd={product.timeEnd} isLive={product.isLive} />
            <Footer />
        </>
    )
}