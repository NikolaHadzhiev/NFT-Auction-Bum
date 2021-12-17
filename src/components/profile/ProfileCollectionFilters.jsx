import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss"
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function ProfileCollectionFilters({ filters, setSort, setPrice}) {

    const [sortValue, setSortValue] = useState("")
    const [priceValue, setPriceValue] = useState("")

    const handleSort = (e) => {
        setSortValue(e.target.value)
        setSort(e.target.value)
    }
    const handlePrice = (e) => {
        setPriceValue(e.target.value)
        setPrice(e.target.value)
    }

    return (
        <div className={classNames(styles['profile-collection-filters'])}>
            <Stack spacing={1} direction={{xs: 'column', sm: "row", md: 'row', lg: "row"}} alignItems="center" justifyContent="flex-end" className={classNames(styles['stack'])}>
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