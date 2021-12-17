import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from '../logo/Logo.jsx'
import InputBase from '@mui/material/InputBase'
import styles from './Header.module.scss'
import classNames from "classnames";

export default function Header() {
    return (
        <div className={classNames(styles.nav)}>
            <div className={classNames(styles.wrapper)}>
                <Grid container className={classNames(styles.container)}>
                    <Grid item className={classNames(styles.logoContainer)}>
                        <Logo />
                    </Grid>
                    <Grid item className={classNames(styles.input)}> 
                        <InputBase
                            startAdornment={<SearchIcon sx={{ marginRight: '0.5rem', marginLeft: '0.5rem' }} />}
                            className={classNames(styles.inputBase)}
                            placeholder="Find items, users and activities"
                        />
                    </Grid>
                    <Grid item display={"flex"} className={classNames(styles.buttons)}>
                        <Button href={"/"}sx={{ margin: '0 0.5rem', textTransform: 'none' }} variant="text" color="inherit">Home</Button>
                        <Button href={"/activity"} sx={{ margin: '0 0.5rem', textTransform: 'none' }} variant="text" color="inherit">Activity</Button>
                        <Button href={"/explore"} sx={{ margin: '0 0.5rem' }} variant="contained">Explore</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}