import SearchIcon from '@mui/icons-material/Search';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from '../logo/Logo.jsx'
import InputBase from '@mui/material/InputBase'
import styles from './Header.module.scss'
import classNames from "classnames";
import { red } from '@mui/material/colors';

export default function Header() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="false">
                <Grid container spacing={12} justifyContent='center' alignItems='center'>
                    <Grid item>
                        <Logo />
                    </Grid>
                    <Grid item sx={{marginRight: '35rem'}}>
                        <InputBase sx={{fontSize: '13px', right: '3.12rem'}}
                        startAdornment={<SearchIcon sx={{ marginRight: '0.5rem' }} 
                        fontSize={"small"} />}
                        className={classNames(styles.inputBase)} 
                        placeholder="Find items, users and activities" 
                        />
                    </Grid>
                    <Grid item>
                        <Button sx={{fontSize: '12px'}} variant="text" color="inherit">Home</Button>
                        <Button sx={{fontSize: '12px'}} variant="text" color="inherit">Activity</Button>
                        <Button sx={{fontSize: '12px'}} variant="contained">Explore</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}