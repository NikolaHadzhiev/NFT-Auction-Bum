import classNames from "classnames";
import styles from "./ProductInfoCreator.module.scss";
import User from "../user/User.jsx"

export default function ProductInfoCreator({ name, avatar, verified = false }) {
    return (
        <div className={classNames(styles['product-info-creator'])}>
            <p className={classNames(styles.title)}>CREATOR</p>
            <div className={classNames(styles['user-container'])}>
                <User name={name} avatar={avatar} verified={verified} size={40}/>
            </div>
        </div>
    )
}