import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { BillReport } from "./BillReport"
import { Menu } from "./Menu"
import { Cancel, Delete, Send, SendSharp } from "@mui/icons-material"

export const Billing = () => {
    return (<>
        
        <Box padding={5}>
            <Typography display="flex" maxWidth sx={{ backgroundColor: "blue", color: "white", fontWeight: "bold" }} paddingY={1} paddingX={2} variant="h6">Caffeteria Bill</Typography>
            <Box border="1px black solid" sx={{ backgroundColor:"pink" }}>
                <Grid container padding={2} display="flex" justifyContent="space-between">
                    <Grid item lg={3} >
                        <Typography fontWeight="bold" textAlign="center">Item Name</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Rate</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Quantity</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Discount</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Net Amount</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Cancel Item</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Add Item</Typography>
                    </Grid>
                </Grid>
                <Grid container padding={2} display="flex" justifyContent="space-between">
                    <Grid item lg={3} >
                        <Menu />
                    </Grid>
                    <Grid item lg={1}>
                        <TextField textAlign="center" />
                    </Grid>
                    <Grid item lg={1}>
                        <TextField textAlign="center" />
                    </Grid>
                    <Grid item lg={1}>
                        <TextField textAlign="center" />
                    </Grid>
                    <Grid item lg={1}>
                        <TextField textAlign="center" />
                    </Grid>
                    <Grid item lg={1} display="flex" justifyContent="center">
                        <IconButton area-label='send' >
                            <Delete sx={{ display: "flex", width: "50px", height: "50px", color: "red" }} />
                        </IconButton>
                    </Grid>
                    <Grid item lg={1} display="flex" justifyContent="center">
                        <IconButton area-label='send' >
                            <SendSharp sx={{ display: "flex", width: "50px", height: "50px", color: "green" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <BillReport />
        </Box>
    </>)
}