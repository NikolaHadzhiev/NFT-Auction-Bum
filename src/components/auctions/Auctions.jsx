import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Container from "@mui/material/Container";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from "./Auctions.module.scss";
import classNames from "classnames";
import Grid from '@mui/material/Grid';
import Card from "../card/Card.jsx"

export default function Auctions({ cards = [], filters }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.trending_header)}>
                <h1>🔥 Live Auctions</h1>
                <FormControl className={classNames(styles.form_control)} fullWidth>
                    <InputLabel id="trending-select-lable">This week</InputLabel>
                    <Select
                        defaultValue=""
                        IconComponent={KeyboardArrowDownIcon}
                        labelId="trending-select-lable"
                        id="trending-select-id"
                        label="This week"
                    >
                        {filters.map((filter, index) => {
                            return (
                                <MenuItem key={index} value={filter.value}>{filter.label}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <Container className={classNames(styles.container)} maxWidth="xl">
                <Grid container spacing={1.7}>
                    {cards.map((card, index) => {
                        return (<Grid item key={index}>{index < 4 ? <Card name={card.name} likes={card.likes} mediaUrl={card.source.url} user={card.owner} price={card.price} currency={card.currency} timeLeft={card.auction_end} /> : null}</Grid>)
                    })}
                </Grid>
            </Container>
        </div>
    )
}
