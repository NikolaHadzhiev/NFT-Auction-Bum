import classNames from "classnames";
import styles from './CollectorColumn.module.scss'
import Collector from "./Collector.jsx"

export default function CollectorColumn({ items = []}) {
    return (
        <div className={classNames(styles.container)}>
            {items.map((item) => (
                <Collector type="light" item={item}/>
            ))}
        </div>
    )
}