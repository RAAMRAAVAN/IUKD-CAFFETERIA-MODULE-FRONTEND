import { Box, Button, TextField, Typography } from "@mui/material"
import "./login.css";
export const Login = () => {
    return (<>
        <Box display="flex" flexDirection="column" width="100%" height="100vh" justifyContent="center" alignItems="center" className="background">
            <img src="./images/iukd_logo.jpg" className="iukd-logo" />
            <Typography variant="h5" color="yellow" fontWeight="bold">IUKD Hospital Management System</Typography>
            <Box display="flex" flexDirection="column"  width="350px" height="330px" padding={5} className="login-box">
                <TextField sx={{
                    borderRadius: "0", paddingBottom: "5px", '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'black', // Set the border color to black
                        },
                        '&:hover fieldset': {
                            borderColor: 'black', // Set the border color to black on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'black', // Set the border color to black on focus
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'black', // Set the legend (label) color to black
                    },
                }} InputProps={{ style: { backgroundColor: 'white' }, }} id="outlined-basic" label="Username" variant="outlined" />
                <TextField InputProps={{ style: { backgroundColor: 'white' }, }} sx={{
                    borderRadius: "0", paddingBottom: "30px", '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'black', // Set the border color to black
                        },
                        '&:hover fieldset': {
                            borderColor: 'black', // Set the border color to black on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'black', // Set the border color to black on focus
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'black', // Set the legend (label) color to black
                    },
                }} id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" sx={{ borderRadius: "0" }}>Sign in</Button>
                <Typography fontSize={12} sx={{ paddingTop: "30px" }}><span style={{ color: "red", fontWeight: "bold" }}>Note:</span> Unauthorised access to the system will be monitored due to security reasons.</Typography>
            </Box>
        </Box>
    </>)
}