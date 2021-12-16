import classNames from "classnames";
import styles from './CollectorColumn.module.scss'
import Collector from "./Collector.jsx"

export default function CollectorColumn({items = []}) {
    return (
        <div className={classNames(styles.container)}>
            {items.map((item, i) => {
                return (<Collector key={item.id} type={(i + 1) % 2 === 0 ? "light" : ""} item={item}/>)
            })}
        </div>
    )
}