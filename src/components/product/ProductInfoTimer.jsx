import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
    return (
        <div className={timeEnd != null ? classNames(styles.active, styles['product-info-timer']) : classNames(styles.deactive, styles['product-info-timer'])}>
            {timeEnd != null ? <p className={classNames(styles.title)}>ENDS IN</p> : null}
            {timeEnd != null ? <div className={classNames(styles.timer)}><Countdown date={timeEnd} suppressHydrationWarning={true} /></div> : null}
        </div>
    )
}