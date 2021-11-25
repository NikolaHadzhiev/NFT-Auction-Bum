import React from 'react'
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import styles from "./ProductContainer.module.scss";
import ProductImage from "./ProductImage.jsx"
import ProductInfo from "./ProductInfo.jsx"
import ProductTabs from "./ProductTabs.jsx"
import ProductAction from "./ProductActions.jsx"
import { useState, useEffect } from "react"

export default function ProductContainer({ name, owner, price, currency, likes, auction_end, details, bids, source }) {
    let functions = {
        onTimeEnd: () => {
            setproductIsLive(null)
            setIsLive(false)
        },
        onBuy: () => { },
        onBid: () => { }
    }

    const [isLive, setIsLive] = useState(auction_end != null ? true : false)
    const [productIsLive, setproductIsLive] = useState(auction_end);

    return (
        <div className={classNames(styles["product-container"])}>
            <Grid container className={classNames(styles["container"])}>
                <Grid item xs={6}>
                    <ProductImage url={source.url} />
                </Grid>
                <Grid item xs={5}>
                    <ProductInfo title={name} owner={owner} price={price} currency={currency} likes={likes} onTimeEnd={functions.onTimeEnd} timeEnd={productIsLive} isLive={isLive} />
                    <ProductTabs text={details} bids={bids} />
                    <ProductAction isLive={isLive} currency={currency} buyAmount={price} bidAmount={(price / 3).toFixed(3)} onBuy={functions.onBuy} onBid={functions.onBid} />
                </Grid>
            </Grid>
        </div>
    )
}
