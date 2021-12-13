import Header from "../../src/components/header/Header.jsx"
import ExploreFilters from "../../src/components/explore/ExploreFilters.jsx";
import ExploreTitle from "../../src/components/explore/ExploreTitle.jsx";
import Card from "../../src/components/card/Card.jsx"
import Footer from "../../src/components/footer/Footer.jsx"
import { Grid, Container } from "@mui/material"
import dataNft from "../../data/nfts.json"

export default function Explore() {
  const filters = {
    "sort": [
      {
        "label": "Name (Ascending)",
        "value": 1
      },
      {
        "label": "Name (Descending)",
        "value": 2
      }
    ],
    "price": [
      {
        "label": "0.3 - 0.5 ETH",
        "value": 3
      },
      {
        "label": "0.5 - 2 ETH",
        "value": 4
      },
      {
        "label": "2- 3 ETH",
        "value": 5
      }
    ]
  }

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container alignItems='center'>
          <Grid item xs={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item xs={9}>
            <ExploreFilters filters={filters} />
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} justifyContent="center" spacing={1.7} paddingTop={5}>
          {dataNft.map((item, i) => {
            return (
              <Grid item key={i}>
                <Card {...item} user={item.owner} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}