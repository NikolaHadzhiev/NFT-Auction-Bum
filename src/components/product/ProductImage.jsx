import classNames from "classnames";
import styles from "./ProductImage.module.scss";

export default function ProductImage({ url }) {
    return (
        <div className={classNames(styles['product-image'])}>
            <img src={`${url}`} alt="NFT" className={classNames(styles.image)} />
        </div>
    )
}