import classNames from "classnames";
import styles from "./ProfileHero.module.scss"

export default function ProfileHero({image}){
    return (
        <div className={classNames(styles['profile-hero'])}>
            <img src={image} className={classNames(styles.image)}></img>
        </div>
    )
}