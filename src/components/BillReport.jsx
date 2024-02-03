import { Box, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react";

export const BillReport = () => {
    const [mode, setMode] = useState('cash');

    const handleChange = (event) => {
        setMode(event.target.value);
    };

    const [bank, setBank] = useState('icici');

    const handleBank = (event) => {
        setBank(event.target.value);
    };
    return (<>
        <Box marginY={5} padding={0}>
            <Grid container display="flex" flexDirection="row">
                <Grid container lg={4} display="flex" flexDirection="column">
                    <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                        <Typography color="white" fontWeight="bold">Bill Remarks:</Typography>
                        <TextField />
                    </Grid>
                    <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                        <Typography color="white" fontWeight="bold">Discount Category:</Typography>
                        <TextField />
                    </Grid>
                </Grid>
                <Grid container display="flex" lg={8} justifyContent="end">
                    <Grid container lg={5} display="flex" flexDirection="column">
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Typography>Total Amount:</Typography>
                            <TextField value="0.0" />
                        </Grid>
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Typography>Net Amount:</Typography>
                            <TextField value="0.0" />
                        </Grid>
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Typography>Due Amount:</Typography>
                            <TextField value="0.0" />
                        </Grid>
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Grid item lg={5}>
                                <Typography>Bank Name:</Typography>
                            </Grid>
                            <Grid item lg={7}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={bank}
                                    fullWidth
                                    onChange={handleBank}
                                >
                                    <MenuItem value="hdfc">HDFC BANK</MenuItem>
                                    <MenuItem value="icici">ICICI BANK</MenuItem>
                                    <MenuItem value="sbi">SBI BANK</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container lg={5} display="flex" flexDirection="column">
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Typography>Total Discount:</Typography>
                            <TextField value="0.0" />
                        </Grid>
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Typography>Receipt Amount:</Typography>
                            <TextField value="0.0" />
                        </Grid>
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Grid item lg={5}>
                                <Typography>Payment Mode:</Typography>
                            </Grid>
                            <Grid item lg={7}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={mode}
                                    fullWidth
                                    onChange={handleChange}
                                >
                                    <MenuItem value="cash">Cash</MenuItem>
                                    <MenuItem value="card">Card</MenuItem>
                                    <MenuItem value="upi">UPI</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid item display="flex" alignItems="center" justifyContent="space-between" padding={1}>
                            <Typography>Reference Number:</Typography>
                            <TextField value="0000" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    </>)
}