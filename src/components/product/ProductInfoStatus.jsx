import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss";
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';

export default function ProductInfoStatus() {
    return (
        <div className={'product-info-status'}>
             <Chip className={classNames(styles.status)} icon={<CircleIcon className={classNames(styles['live-icon'])} />} label={"LIVE"} variant="outlined" />
        </div>
    )
}