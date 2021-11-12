import styles from'./Avatar.module.scss'
import classNames from "classnames";

export default function Avatar({ url = '/images/avatar.png', size = 90, verified = false }) {
    return (
        <div style={{width: size, height: size}} className={classNames(styles.avatar)}>
            <img style={{width: size, height: size}} className={classNames(styles.image)} src={url} alt="avatar" />
            {verified ? <img className={classNames(styles.badge)} src='/images/verified.svg' alt="verified" /> : null}
        </div>
    );
}