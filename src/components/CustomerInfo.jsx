import { Box, Grid, TextField, Typography } from "@mui/material"
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import { useState } from "react";
export const CustomerInfo = () => {
    // const [selectedDate, setSelectedDate] = useState(null);

    //   const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //   };
    return (<>
        <Box padding={5}>
            <Typography display="flex" maxWidth sx={{ backgroundColor: "blue", color: "white", fontWeight: "bold" }} paddingY={1} paddingX={2} variant="h6">Customer Information</Typography>
            <Box display="flex"  border="1px black solid" sx={{blur:"8px", backgroundColor:"pink"}}>
                <Grid container  display="flex" justifyContent="space-between" width="95%" padding={2}>
                    <Grid item xl={2} paddingX={1} display="flex" alignItems="center">
                        <Typography  marginRight={1}>UHID:</Typography>
                        <TextField  fullWidth />
                    </Grid>
                    <Grid item xl={3} paddingX={1} display="flex" alignItems="center">
                        <Typography  marginRight={1}>Name:</Typography>
                        <TextField value="cash customer" fullWidth />
                    </Grid>
                    <Grid item xl={4} paddingX={1} display="flex" alignItems="center">
                        <Grid item lg={4}><Typography marginRight={1} noWrap>Phone Number:</Typography></Grid>

                        <Grid item lg={7}><TextField fullWidth /></Grid>

                    </Grid>
                    <Grid item xl={3} paddingX={1} display="flex" alignItems="center">
                        <Grid item lg={3}>
                            <Typography marginRight={1}>Date:</Typography>
                        </Grid>
                        <Grid item lg={5}>
                            <TextField type="date" />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>)
}