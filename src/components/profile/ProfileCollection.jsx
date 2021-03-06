import { Container, Grid, Typography } from '@mui/material/';
import ProfileCollectionFilters from './ProfileCollectionFilters.jsx'
import Card from '../card/Card.jsx'
import classNames from "classnames";
import styles from "./ProfileCollection.module.scss"

export default function ProfileCollection({ user, filters, items, setSort, setPrice}) {
    return (
        <div className={classNames(styles['profile-collection'])}>
            <Container maxWidth="xl" disableGutters={true}>
                <Grid container alignItems="baseline" justifyContent="center" alignItems={"center"} direction={{xs: 'column', lg: 'row'}}>
                    <Grid item xs={3} >
                        <Typography variant={"h3"} fontSize={40} paddingLeft={{lg: 7}}>Collection</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <ProfileCollectionFilters filters={filters} setSort={setSort} setPrice={setPrice} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent={"center"} sx={{ paddingTop: "40px" }}>
                    {items.map((card, i) => {
                        return (
                            <Grid item key={i}>
                                <Card user={user} name={card.name} price={card.price} likes={card.likes} currency={card.currency} mediaUrl={card.source.url} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}