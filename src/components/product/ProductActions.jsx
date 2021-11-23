import React from 'react'
import classNames from "classnames";
import styles from "./ProductActions.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function ProductActions({ isLive = true, currency, buyAmount, bidAmount, onBuy, onBid }) {
    return (
        <div className={classNames(styles["product-actions"])}>
            <Grid container>
                <Grid item xs={5}>
                    <Button className={classNames(styles["button"])} variant={isLive == true ? "contained" : "disabled"} color="inherit" onClick={onBuy}>Buy for {buyAmount} {currency}</Button>
                </Grid>
                <Grid item xs={7}>
                    <Button className={classNames(styles["button"], styles["button-bid"])} variant={isLive == true ? "outlined": "disabled"} color="success" onClick={onBid}>Place bid for {bidAmount} {currency}</Button>
                </Grid>
            </Grid>
        </div>
    )
}
