import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Container from "@mui/material/Container";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import Grid from '@mui/material/Grid';
import CollectorColumn from "./CollectorColumn.jsx"
import _ from 'lodash';
import { useMemo, useState } from "react"

export default function TopCollectors({ collectors = [], filters, setTopCollectorsSort }) {
    const [sort, setSort] = useState("");

    const handleSort = (event) => {
        setSort(event.target.value)
        setTopCollectorsSort(event.target.value)
    }

    const mappedCollectors = useMemo(() => {
        return collectors.map((collector, index) => ({
            ...collector,
            id: Number(index + 1)
        }));
    }, [collectors])

    const chunckedMappedCollectors = useMemo(() => {
        return _.chunk(mappedCollectors, 3);
    }, [mappedCollectors])

    return (
        <div className={classNames(styles.div_wrapper)}>
            <div className={classNames(styles.top_collectors)}>
                <h1>Top Collectors</h1>
                <FormControl className={classNames(styles.form_control)} fullWidth>
                    <InputLabel id="topCollectors-select-lable">Sort by</InputLabel>
                    <Select
                        defaultValue=""
                        IconComponent={KeyboardArrowDownIcon}
                        labelId="topCollectors-select-lable"
                        id="topCollectors-select-id"
                        label="Sort by"
                        value={sort}
                        onChange={handleSort}
                    >
                        {filters.map((filter, index) => {
                            return (
                                <MenuItem key={index} value={filter.value}>{filter.label}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <Container className={classNames(styles.container)} maxWidth="xl" disableGutters={true}>
                <Grid container spacing={2}>
                    {chunckedMappedCollectors.map((collector, index) => {
                        return (<Grid item key={index}><CollectorColumn items={collector} /></Grid>)
                    })}
                </Grid>
            </Container>
        </div>
    )
}