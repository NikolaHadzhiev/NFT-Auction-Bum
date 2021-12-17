import ProductInfoTitle from "../product/ProductInfoTitle.jsx"
import ProductInfoPrice from "../product/ProductInfoPrice.jsx"
import ProductInfoStatus from "../product/ProductInfoStatus.jsx"
import ProductInfoLikes from "../product/ProductInfoLikes.jsx"
import ProductInfoCreator from "../product/ProductInfoCreator.jsx"
import ProductInfoTimer from "../product/ProductInfoTimer.jsx"
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import classNames from "classnames";
import styles from "./ProductInfo.module.scss";

export default function ProductInfo({ title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive}) {
    return (
        <div className={classNames(styles['product-info'])}>
            <ProductInfoTitle text={title} />
            <Stack direction="row" className={classNames(styles.stats)}>
                <ProductInfoPrice amount={price} currency={currency} />
                <div className={classNames(styles.product_info_meta)}>
                    {(isLive != null && isLive != false) ? <ProductInfoStatus /> : null}
                    <ProductInfoLikes amount={likes} />
                </div>
            </Stack>
            <Grid container spacing={2} className={classNames(styles['container'])}>
                <Grid item xs={7}><ProductInfoCreator name={creator.username} avatar={creator.avatar.url} verified={creator.confirmed} /></Grid>
                <Grid item xs={5}><ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/></Grid>
            </Grid>
        </div>
    )
}