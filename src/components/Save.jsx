import { Box, Button } from "@mui/material"

export const Save = () => {
    return (<>
        <Box display="flex" justifyContent="center">
            <Box display="flex" width="500px" justifyContent="space-between">
                <Button variant="outlined" fullWidth sx={{marginX:"10px"}}>New</Button>
                <Button variant="outlined" fullWidth sx={{marginX:"10px"}}>Print</Button>
                <Button variant="contained" fullWidth sx={{marginX:"10px"}}>Save</Button>
            </Box>
        </Box>
    </>)
}