import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss";
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';

export default function ProductInfoStatus() {
    return (
        <div className={classNames(styles.product_info_status)}>
             <Chip className={classNames(styles.status)} icon={<CircleIcon className={classNames(styles.live_icon)} />} label={"LIVE"} variant="outlined" />
        </div>
    )
}