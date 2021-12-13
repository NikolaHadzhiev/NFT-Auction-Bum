import Header from "../../src/components/header/Header.jsx"
import ExploreFilters from "../../src/components/explore/ExploreFilters.jsx";
import ExploreTitle from "../../src/components/explore/ExploreTitle.jsx";
import Card from "../../src/components/card/Card.jsx"
import Footer from "../../src/components/footer/Footer.jsx"
import { Grid, Container } from "@mui/material"
import { useState, useEffect } from "react";

export default function Explore() {
  const [nfts, setNfts] = useState([]);
  const [filters, setFilters] = useState();

  useEffect(async () => {
    const response = await fetch(`${process.env.apiUrl}/explore`);
        if (response.status == 200) {
            const data = await response.json();
            setNfts(data.nfts);
            setFilters(data.filters);
        }
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container alignItems='center'>
          <Grid item xs={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item xs={9}>
            {filters && <ExploreFilters filters={filters} />}
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} justifyContent="center" spacing={1.7} paddingTop={5}>
          {nfts.map((item, i) => {
            return (
              <Grid item key={i}>
                <Card {...item} user={item.owner}/>
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}