import classNames from "classnames";
import styles from "./ProductInfoPrice.module.scss";
import Typography from '@mui/material/Typography';

export default function ProductInfoPrice({ amount = 0, currency}) {
    return (
        <div className={classNames(styles.product_info_price)}>
             <Typography variant="p" component="p">ON SALE FOR {amount} {currency}</Typography>
        </div>
    )
}