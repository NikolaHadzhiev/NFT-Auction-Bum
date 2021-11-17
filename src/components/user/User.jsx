import styles from './User.module.scss'
import classNames from "classnames";
import Avatar from "../avatar/Avatar.jsx"

export default function User({ name = "", info = "", avatar = "", size = 55, verified = false }) {
    return (
        <div className={classNames(styles.user)}>
            <Avatar url={avatar} size={size} verified={verified}></Avatar>
            <div className={classNames(styles.metaInfo)}>
                <p className={classNames(styles.name)}>{name}</p>
                <p className={classNames(styles.info)}>{info} {info != "" ? "Items" : info}</p>
            </div>
        </div>
    )
}