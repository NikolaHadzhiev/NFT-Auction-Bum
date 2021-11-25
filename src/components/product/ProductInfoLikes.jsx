import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss";
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify";

export default function ProductInfoLikes({amount = 0}) {
    return (
        <div className={'product-info-likes'}>
             <Chip className={classNames(styles.likes)} onClick={() => {}} icon={<FavoriteIcon className={classNames(styles.icon)} />} label={millify(amount, { lowercase: true })} variant="outlined" />
        </div>
    )
}