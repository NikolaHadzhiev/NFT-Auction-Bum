import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss"
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function ProfileCollectionFilters({ filters }) {

    const [sortValue, setSortValue] = useState("")
    const [priceValue, setPrice] = useState("")

    const handleSort = (e) => {
        setSortValue(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    return (
        <div className={classNames(styles['profile-collection-filters'])}>
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="flex-end">
                <FormControl className={classNames(styles['select-buttons'])}>
                    <InputLabel id="sort-by-label">Sort by</InputLabel>
                    <Select
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
                        labelId="select-price-range-label"
                        value={priceValue}
                        onChange={handlePrice}>
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