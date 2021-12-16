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
  const [sort, setSort] = useState(0)
  const [price, setPrice] = useState(0)


  useEffect(async () => {
    let url = ""
    if(sort != 0 && price != 0){
      url = `${process.env.apiUrl}/explore?sort=${sort}&price=${price}`
    }else if(sort != 0){
      url = `${process.env.apiUrl}/explore?sort=${sort}`
    }else if(price != 0){
      url = `${process.env.apiUrl}/explore?price=${price}`
    }else{
      url = `${process.env.apiUrl}/explore`
    }

    const response = await fetch(url);
    if (response.status == 200) {
      const data = await response.json();
      setNfts(data.nfts);
      setFilters(data.filters);
    }

  }, [sort, price])
  

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container alignItems='center'>
          <Grid item xs={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item xs={9}>
            {filters && <ExploreFilters filters={filters} setSortBy={setSort} setPrice={setPrice}/>}
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} justifyContent="center" spacing={1.7} paddingTop={5}>
          {nfts.map((item, i) => {
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