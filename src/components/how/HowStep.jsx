import classNames from "classnames";
import styles from './HowStep.module.scss'

export default function HowStep({ number = 0, title = "", description = "" }) {
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
