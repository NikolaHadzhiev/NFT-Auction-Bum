import classNames from "classnames";

export default function ProductImage({ url }) {
    return (
        <div className={classNames(styles.product-image)}>
            <img src={`${url}`} alt="NFT" className={classNames(styles.image)} />
        </div>
    )
}