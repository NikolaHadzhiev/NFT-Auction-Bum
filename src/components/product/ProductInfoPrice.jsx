import classNames from "classnames";
import styles from "./ProductInfoPrice.module.scss";
import Typography from '@mui/material/Typography';

export default function ProductInfoPrice({ amount = 0, currency}) {
    return (
        <div className={classNames(styles['product-info-price'])}>
             <Typography variant="p" component="p" className={classNames(styles['p-styles'])}>ON SALE FOR {amount} {currency}</Typography>
        </div>
    )
}