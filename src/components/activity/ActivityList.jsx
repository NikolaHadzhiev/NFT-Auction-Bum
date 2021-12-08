import { Stack } from "@mui/material";
import ActivityListItem from "./ActivityListItem";
import classNames from "classnames";
import styles from "./ActivityList.module.scss";

export default function ActivityList({ items }) {
    return (
        <div className={classNames(styles['activity-list'])}>
            <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
                {items.map((el, i) => {
                    return <ActivityListItem key={i} created_at={el.created_at} nft={el.nft} user={el.user} type={el.type} />
                })}
            </Stack>
        </div>
    )
}