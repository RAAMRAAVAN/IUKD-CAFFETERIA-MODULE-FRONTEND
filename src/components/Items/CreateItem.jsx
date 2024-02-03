import { Button, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { fetchItems } from "../../redux";
import { useDispatch } from "react-redux";

export const CreateItem = () => {
    const dispatch=useDispatch(); 
    const [itemName, setItemName] = useState('');
    const [discountApplicable, setDiscountApplicable] = useState(false);
    const [purchaseRate, setPurchaseRate] = useState(0);
    const [mrp, setMRP] = useState(0);
    const [gst, setGST] = useState(0);

    const [discount, setDiscount] = useState('None');

    const handleDiscount = (event) => {
        setDiscount(event.target.value);
    };
    const itemDetails = {
        "itemName": itemName,
        "discount": discount,
        "pr": purchaseRate,
        "mrp": mrp,
        "gst": gst
    }
    const submitItems = () => {
        console.log("item details=", itemDetails)
        AddItem()
    }
    // console.log(itemDetails)
    // Function to handle the POST request
    const AddItem = async () => {
        try {
            // Define the API endpoint URL for the POST request
            const apiUrl = 'http://localhost:5000/create-item';

            // Make the POST request using Axios
            const response = await axios.post(apiUrl, itemDetails);

            // Handle successful response
            console.log('Response from server:', response.data);
            setItemName('');
            setPurchaseRate(0);
            setMRP(0);
            setGST(0);
            setDiscount(false);
            dispatch(fetchItems());
        } catch (error) {
            // Handle error
            console.error('Error making POST request:', error);
        }
    };

    return (<>
        <Typography variant="h3" textAlign="center">Create New Item</Typography>
        <Typography>Enter Item Name:</Typography>
        <TextField fullWidth value={itemName} onChange={(event) => setItemName(event.target.value)} />
        <Typography>Enter Purchase Rate:</Typography>
        <TextField fullWidth value={purchaseRate} onChange={(event) => setPurchaseRate(event.target.value)} />
        <Typography>Enter MRP:</Typography>
        <TextField fullWidth value={mrp} onChange={(event) => setMRP(event.target.value)} />
        <Typography>Discount Applicable ?:</Typography>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={discount}
            fullWidth
            onChange={handleDiscount}
        >
            <MenuItem value={true}>YES</MenuItem>
            <MenuItem value={false}>NO</MenuItem>
        </Select>
        <Typography>Enter GST %:</Typography>
        <TextField fullWidth sx={{ marginBottom: "10px" }} value={gst} onChange={(event) => setGST(event.target.value)} />
        <Button fullWidth variant="contained" onClick={AddItem}>Submit</Button>
    </>)
}