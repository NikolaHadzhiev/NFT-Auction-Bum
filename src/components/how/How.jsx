import classNames from "classnames";
import styles from './How.module.scss'
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import HowStep from "../how/HowStep.jsx"


export default function How({ description = "", title = "", items = [], link = "" }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Grid container className={classNames(styles.how_content)}>
                <Grid item>
                    <div className={classNames(styles.how_it_works)}>
                        <Grid container className={classNames(styles.container)}>
                            <Grid item key={"title"}><h1 className={classNames(styles.title)}>{title.toUpperCase()}</h1></Grid>
                            <Grid item key={"description"}><p className={classNames(styles.description)}>{description}</p></Grid>
                            <Grid item key={"learn_more_button"} className={classNames(styles.learn_button)}><Button variant="contained" href={link}>Learn more</Button></Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classNames(styles.step_component)}>
                        {items.map(((item, index) => {
                            return (<HowStep number={index} title={item.title} description={item.description} />)
                        }))}
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}