import classNames from "classnames";
import styles from "./ExploreFilters.module.scss"
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function ExploreFilters({ filters, setSortBy, setPrice}) {
    const [sortValue, setSortValue] = useState("")
    const [sortPriceValue, setSortPrice] = useState("")

    const handleSort = (event) => {
        setSortValue(event.target.value);
        setSortBy(event.target.value);
    }

    const handleSortPrice = (event) => {
        setSortPrice(event.target.value);
        setPrice(event.target.value);
    }

    return (
        <div className={classNames(styles['explore-filters'])}>
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="flex-end">
                <FormControl className={classNames(styles['select-buttons'])}>
                    <InputLabel id="sort-by-label">Sort by</InputLabel>
                    <Select
                        IconComponent={KeyboardArrowDownIcon}
                        labelId="select-sort-by-label"
                        value={sortValue}
                        onChange={handleSort}>
                        {filters.sort.map(filter => {
                             return <MenuItem value={filter.value} key={filter.value}>{filter.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl className={classNames(styles['select-buttons'])}>
                    <InputLabel id="price-range-label">Price range</InputLabel>
                    <Select
                        IconComponent={KeyboardArrowDownIcon}
                        labelId="select-price-range-label"
                        value={sortPriceValue}
                        onChange={handleSortPrice}>
                        {filters.price.map(filter => {
                             return <MenuItem value={filter.value} key={filter.value}>{filter.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl className={classNames(styles['search'])}>
                    <TextField className={classNames(styles['text-field'])} InputProps={{startAdornment: (<InputAdornment position="start" color="secondary" variant="standard" ><SearchIcon sx={{ color: "#E1E1FC" }} /></InputAdornment>)}} />
                </FormControl>
            </Stack>
        </div>
    )
}

