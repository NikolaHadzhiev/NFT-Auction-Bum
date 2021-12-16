import { formatDistance, parseISO } from "date-fns"
import Avatar from "../avatar/Avatar.jsx"
import Link from "../link/Link.jsx"
import classNames from "classnames";
import styles from "./ActivityListItem.module.scss"

export default function ActivityItem({ user, created_at, nft, type = 'like' }) {
    return (
        <div className={classNames(styles["activity-item-container"])}>
            <Avatar size={70} url={user.avatar.url} verified={user.verified}/>
            <div className={classNames(styles["activity-item-para"])}>
                <p><strong>{user.username}</strong> {type == 'like' ? 'liked' : 'bought'} <Link href="#" color="secondary">"{nft.name}"</Link> by <Link href="#" color="secondary">{nft.owner.username}</Link></p>
                <p className={classNames(styles.date)}>{formatDistance(parseISO(created_at), Date.now())} ago</p>
            </div>
        </div>
    )
}
