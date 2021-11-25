import classNames from "classnames";
import styles from "./Description.module.scss"
import Typography from '@mui/material/Typography';

export default function Description({ text, image }) {
    return (
        <div className={classNames(styles.description)}>
            <Typography variant={"body1"} className={classNames(styles.text)}>{text}</Typography>
            <img src={image} className={classNames(styles.image)}></img>
        </div>
    )
}