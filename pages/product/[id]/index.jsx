import dataNfts from "../../../data/nfts.json"
import ErrorPage from 'next/error'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Header from "../../../src/components/header/Header.jsx"
import ProductContainer from "../../../src/components/product/ProductContainer.jsx"
import Footer from "../../../src/components/footer/footer.jsx"

export default function Product() {
    const [product, setProduct] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        setProduct(dataNfts)
    }, []);

    const foundProduct = product.find(product => {
        return product.id === parseInt(id)
    });

    return (
        <>
            <Header />
            {foundProduct != undefined ? <ProductContainer {...foundProduct} /> : <ErrorPage statusCode={404} />}
            <Footer />
        </>

    )
}