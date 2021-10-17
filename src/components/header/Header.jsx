import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from '../logo/Logo.jsx'
import InputBase from '@mui/material/InputBase'
import styles from './Header.module.scss'
import classNames from "classnames";

export default function Header() {
    return (
        <Grid container className={classNames(styles.container)}>
            <Grid item className={classNames(styles.logoContainer)}>
                <Logo />
            </Grid>
            <Grid item>
                <InputBase
                    startAdornment={<SearchIcon sx={{ marginRight: '0.5rem', marginLeft: '0.5rem' }} />}
                    className={classNames(styles.inputBase)}
                    placeholder="Find items, users and activities"
                />
            </Grid>
            <Grid item>
                <Button sx={{ margin: '0 0.5rem', textTransform: 'none'}} variant="text" color="inherit">Home</Button>
                <Button sx={{ margin: '0 0.5rem', textTransform: 'none'}} variant="text" color="inherit">Activity</Button>
                <Button sx={{ margin: '0 0.5rem'}} variant="contained">Explore</Button>
            </Grid>
        </Grid>
    );
}