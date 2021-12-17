import classNames from "classnames";
import styles from "./ProfileUser.module.scss";
import Avatar from '../avatar/Avatar.jsx';
import { Typography } from "@mui/material";

export default function ProfileUser({ name, info, avatar, verified }) {
    return (
        <div className={classNames(styles['profile-user'])}>
            <Avatar url={avatar} size={192} verified={verified} />
            <Typography variant={"h3"} className={classNames(styles["user-name"])}>{name}</Typography>
            <Typography variant={"body1"} className={classNames(styles["user-info"])}>{info}</Typography>
        </div>
    )
}