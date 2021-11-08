import classNames from "classnames";
import styles from "./ProductInfoTitle.module.scss";
import Typography from '@mui/material/Typography';

export default function ProductInfoTitle({ text}) {
    return (
        <div className={classNames(styles.product_info_title)}>
             <Typography variant="h1" component="h1">{text}</Typography>
        </div>
    )
}