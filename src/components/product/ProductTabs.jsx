import { useState } from "react";
import classNames from "classnames";
import styles from "./ProductTabs.module.scss";
import ProductUser from "./ProductUser.jsx"
import { formatDistance, parseISO } from "date-fns"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import {Tab, TableRow, TableCell, TableBody, Table, Box} from '@mui/material';

export default function ProductTabs({ text, bids = [] }) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classNames(styles["product-tabs"])}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 4, borderColor: '#1A1140' }}>
                    <TabList onChange={handleChange}>
                        <Tab className={"tab-details"} label="Details" value="1" />
                        <Tab className={"tab-bids"} label="Bids" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{padding: '10px 0 0 0', maxWidth: "450px"}}>
                    <p className={classNames(styles["paragraph"])}>{text}</p>
                </TabPanel>
                <TabPanel value="2" sx={{padding: '0'}}>
                    <Table sx={{ maxWidth: 580 }}>
                        <TableBody>
                            {bids.map((bid, i)=> (
                                <TableRow key={`table-row-${i}`} className={`table-row-${i}`} sx={(i != 0) && (i % 2 == 1) ? {backgroundColor: "#160F35"} : {backgroundColor: "#0F0D1F"}}>
                                    <TableCell component="th" scope="row" padding='none' sx={{border: "0", paddingTop: '7px', paddingLeft: '25px'}}>
                                        <ProductUser {...bid.user} />
                                    </TableCell>
                                    <TableCell align="right" padding='none' sx={{border: "0", color: "#24f25e", paddingRight: '25px', width: "100px", fontSize: "15px"}}>{bid.amount} ETH</TableCell>
                                    <TableCell align="right" padding='none' sx={{border: "0", paddingRight: '25px', width: "100px", fontSize: "15px", textAlign: "center"}}>
                                        {formatDistance(
                                            Date.now(),
                                            parseISO(bid.date)
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabPanel>
            </TabContext>
        </div>
    )
}