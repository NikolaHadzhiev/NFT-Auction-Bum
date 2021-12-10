import { Stack } from "@mui/material";
import ActivityListItem from "./ActivityListItem";
import classNames from "classnames";
import styles from "./ActivityList.module.scss";

export default function ActivityList({ items }) {
    return (
        <div className={classNames(styles['activity-list'])}>
            <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
                {items.map((item, i) => {
                    <ActivityListItem key={i} created_at={item.created_at} nft={item.nft} user={item.user} type={item.type} />
                })}
            </Stack>
        </div>
    )
}