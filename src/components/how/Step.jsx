import classNames from "classnames";
import styles from './Step.module.scss'

export default function Step({ number = 0, title = "", description = "" }) {
    return (
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.number)}>
                <h1 className={classNames(styles.number_h1)}>{number + 1}</h1>
            </div>
            <div className={classNames(styles.meta_info)}>
                <p className={classNames(styles.meta_info_title)}>{title.toUpperCase()}</p>
                <p className={classNames(styles.meta_info_description)}>{description}</p>
            </div>
        </div>
    )
}
