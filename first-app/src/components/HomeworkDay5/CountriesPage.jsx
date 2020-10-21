import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  InputAdornment,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "25px",
  },
  media: {
    height: 173,
  },
  formControl: {
    margin: "25px",
    minWidth: 120,
  },
})

const CountriesPage = () => {
  const URL = "https://restcountries.eu/rest/v2/all"
  const URLFilterByName = "https://restcountries.eu/rest/v2/name/"
  const URLFilterByRegion = "https://restcountries.eu/rest/v2/region/"

  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    fetchAllCountries()
  }, [])

  useEffect(() => {
    fetchCountriesByRegion()
  }, [region])

  const fetchAllCountries = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      const response = await axios.get(`${URL}`)
      const slicedCountries = response.data.slice(0, 20)
      setCountries(slicedCountries)
      setIsLoading(false)
    } catch {
      setIsError(true)
    }
  }

  const fetchCountriesByName = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      const response = await axios.get(`${URLFilterByName}${query}`)
      const slicedCountries = response.data.slice(0, 20)
      setCountries(slicedCountries)
      setIsLoading(false)
    } catch {
      setIsError(true)
    }
  }

  const fetchCountriesByRegion = async () => {
    if (region.length === 0) return
    setIsLoading(true)
    setIsError(false)
    try {
      const response = await axios.get(`${URLFilterByRegion}${region}`)
      const slicedCountries = response.data.slice(0, 20)
      setCountries(slicedCountries)
      setIsLoading(false)
    } catch {
      setIsError(true)
    }
  }

  const handleSubmit = e => {
    fetchCountriesByName()
  }

  const handleChangeRegion = e => {
    setRegion(e.target.value)
  }

  const handleOnChange = e => {
    setQuery(e.target.value)
  }

  const ShowCountries = () => {
    if (isLoading) {
      return <p>Loading...</p>
    }

    if (isError) {
      return <p>Error, please try again...</p>
    }

    return (
      <>
        {countries.map((it, i) => (
          <Grid key={i} item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={it.flag}
                  title="country flag"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {it.name}
                  </Typography>
                  <Typography color="textSecondary" component="p">
                    Population: {it.population}
                  </Typography>
                  <Typography color="textSecondary" component="p">
                    Region: {it.region}
                  </Typography>
                  <Typography color="textSecondary" component="p">
                    Capital: {it.capital}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </>
    )
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            id="search-id"
            label="Search for a country..."
            value={query}
            onChange={handleOnChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon onClick={handleSubmit} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Filter By Region</InputLabel>
          <Select
            id="filter-by-region"
            value={region}
            onChange={handleChangeRegion}
            label="Filter By Region"
          >
            <MenuItem value="">
              <em>Filter By Region</em>
            </MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>Americas</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <ShowCountries />
    </Grid>
  )
}

export default CountriesPage
