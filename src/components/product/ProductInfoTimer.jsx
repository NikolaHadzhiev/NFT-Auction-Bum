import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
    return (
        <div className={classNames(styles['product-info-timer'], {[styles['active']]: timeEnd})}>
            {timeEnd != null ? <p className={classNames(styles.title)}>ENDS IN</p> : null}
            <div className={classNames(styles.timer)} >
                {timeEnd != null ? <Countdown date={timeEnd} onComplete={onTimeEnd} suppressHydrationWarning={true} /> : null}
            </div>
        </div>
    )
}