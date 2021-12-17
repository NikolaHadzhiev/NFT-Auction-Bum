import classNames from "classnames";
import styles from "./ActivityFilters.module.scss"
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function ActivityFilters({ filters, setSortBy, setType}) {
    const [sortValue, setSortValue] = useState("")
    const [sortTypeValue, setSortType] = useState("")

    const handleSort = (event) => {
        setSortValue(event.target.value)
        setSortBy(event.target.value)
    }

    const handleSortType = (event) => {
        setSortType(event.target.value)
        setType(event.target.value)
    }

    return (
        <div className={classNames(styles['activity-filters'])}>
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="center" className={classNames(styles['stack'])}>
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
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        IconComponent={KeyboardArrowDownIcon}
                        labelId="select-type-label"
                        value={sortTypeValue}
                        onChange={handleSortType}>
                        {filters.type.map(filter => {
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