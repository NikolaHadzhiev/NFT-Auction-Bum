import classNames from "classnames";
import styles from './CollectorColumn.module.scss'
import Collector from "./Collector.jsx"

export default function CollectorColumn({items = []}) {
    return (
        <div className={classNames(styles.container)}>
            {items.map((item) => {
                return (item.id < 13 ? <Collector key={item.id} type="light" item={item}/> : null)
            })}
        </div>
    )
}