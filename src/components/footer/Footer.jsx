import styles from './Footer.module.scss'
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from '../logo/Logo.jsx'

const Footer = () => (
    <div className={classNames(styles.foot)}>
            <div className={classNames(styles.wrapper)}>
                <Grid container className={classNames(styles.container)}>
                    <Grid item className={classNames(styles.logoContainer)}>
                        <Logo type="muted"/>
                    </Grid>
                    <Grid item className={classNames(styles.paraStyle)}>
                        <p>Burn All Rights Reserved 2021</p>
                    </Grid>
                    <Grid item>
                        <Button sx={{ textTransform: 'none' }} variant="text" color="inherit">Privacy Policy</Button>
                        <Button sx={{ textTransform: 'none' }} variant="text" color="inherit">Cookie Policy</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
);

export default Footer;