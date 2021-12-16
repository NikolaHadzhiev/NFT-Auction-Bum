import classNames from "classnames";
import styles from './Collector.module.scss'
import User from "../user/User.jsx"

export default function CollectorColumn({ type = "", item}) {
    return (
        <div className={type == "light" ? classNames(styles.collector_container, styles.container_light) : classNames(styles.collector_container)}>
            <div className={type == "light" ? classNames(styles.number, styles.light) : classNames(styles.number)}>
                <h1 className={classNames(styles.number_h1)}>{item.id}</h1>
            </div>
            <div className={classNames(styles.user)}>
                <User name={item.username} info={item.nfts.length} avatar={item.avatar.url} verified={item.verified} />
            </div>
        </div>
    )
}