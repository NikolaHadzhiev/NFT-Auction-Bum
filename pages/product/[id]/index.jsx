import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Header from "../../../src/components/header/Header.jsx"
import ProductContainer from "../../../src/components/product/ProductContainer.jsx"
import Footer from "../../../src/components/footer/Footer.jsx"

export default function Product() {
    const [product, setProduct] = useState();
    const router = useRouter()
    const { id } = router.query

    useEffect(async () => {
        const response = await fetch(`${process.env.apiUrl}/nfts/${id}`);
        if (response.status == 200) {
            const product = await response.json();
            setProduct(product)
        }
    }, [id]);


    return (
        <>
            <Header />
            {product && <ProductContainer {...product} />}
            <Footer />
        </>

    )
}