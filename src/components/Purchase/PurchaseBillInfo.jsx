import { Box, Grid, TextField, Typography } from "@mui/material"
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import { useEffect, useState } from "react";
export const PurchaseBillInfo = (props) => {
    const [billno, SetBillNo] = useState();
    const [partyno, SetPartyNo] = useState();
    const [partyName, SetPartyName] = useState(props.partyName);
    const [date, SetDate] = useState();
    const EditBillInfo = props.EditBillInfo;
    // SetBillNo={SetBillNo} SetPartyNo={SetPartyNo} SetPartyName={SetPartyName} SetDate={SetDate}
    useEffect(()=>{
        EditBillInfo(billno, partyno, partyName, date);
    },[billno, partyno, partyName, date])
    return (<>
        <Box padding={5}>
            <Typography display="flex" maxWidth sx={{ backgroundColor: "blue", color: "white", fontWeight: "bold" }} paddingY={1} paddingX={2} variant="h6">Purchase Bill Information</Typography>
            <Box display="flex" border="1px black solid" sx={{ blur: "8px", backgroundColor: "pink" }}>
                <Grid container display="flex" justifyContent="space-between" width="95%" padding={2}>
                    <Grid item xl={3} paddingX={1} display="flex" alignItems="center">
                        <Typography marginRight={1}>Bill No:</Typography>
                        <TextField value={billno} onChange={(e)=>SetBillNo(e.target.value)}/>
                    </Grid>
                    <Grid item xl={3} paddingX={1} display="flex" alignItems="center">
                        <Typography marginRight={1}>Party No:</Typography>
                        <TextField value={partyno} onChange={(e)=>SetPartyNo(e.target.value)}/>
                    </Grid>
                    <Grid item xl={4} paddingX={1} display="flex" alignItems="center" >
                        <Grid item xl={3}>
                            <Typography marginRight={1}>Party Name:</Typography>
                        </Grid>
                        <Grid item xl={8}>
                            <TextField value={partyName} fullWidth onChange={(e)=>SetPartyName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    {/* <Grid item xl={2} paddingX={1} display="flex" alignItems="center">
                        <Grid item lg={4}><Typography marginRight={1} noWrap>Phone Number:</Typography></Grid>

                        <Grid item lg={7}><TextField fullWidth /></Grid>

                    </Grid> */}
                    <Grid item xl={2} display="flex" alignItems="center" >
                        <Grid item lg={6}>
                            <Typography marginRight={5}>Date:</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <TextField type="date" value={date} onChange={(e)=>SetDate(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>)
}