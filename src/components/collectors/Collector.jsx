import classNames from "classnames";
import styles from './Collector.module.scss'
import User from "../user/User.jsx"

export default function CollectorColumn({ type = "", item}) {
    return (
        <div className={(item.id == 2 || item.id == 5 || item.id == 8 || item.id == 11) ? classNames(styles.collector_container, styles.container_light) : classNames(styles.collector_container)}>
            <div className={(item.id == 2 || item.id == 5 || item.id == 8 || item.id == 11) && type == "light" ? classNames(styles.number, styles.light) : classNames(styles.number)}>
                <h1 className={classNames(styles.number_h1)}>{item.id}</h1>
            </div>
            <div className={classNames(styles.user)}>
                <User name={item.name} info={item.nftsCount} avatar={item.avatar} verified={item.verified} />
            </div>
        </div>
    )
}