import { Delete, SendSharp } from "@mui/icons-material"
import { Grid, IconButton, TextField } from "@mui/material"
import { Menu } from "../Menu"
import { useEffect, useState } from "react"

export const AddedItems = (props) => {
    const [itemName, SetItemName] = useState(props.itemName);
    const [PRate, setPRate] = useState(props.PRate);
    const [quantity, setQuantity] = useState(props.quantity);
    const [mrp, SetMrp]=useState(props.mrp);
    const [gst, SetGST] = useState(props.gst);
    const [netAmount, SetNetAmount] = useState(props.netAmount);
    const handleDelete = () => {
        // Create a copy of the array
        console.log("items=", props.item)
        const updatedItems = [...props.item];
    
        // Use splice to remove the item at the specified index
        updatedItems.splice(props.index, 1);
    
        // Update the state with the modified array
        props.SetItem(updatedItems);
      };
      const EditItem = props.EditItem;
      useEffect(() => {
        // Perform side effect here, such as data fetching
        EditItem(props.index, PRate, quantity, mrp, gst, PRate*(gst/100+1)*quantity);
      }, [PRate, quantity, mrp]);
      

    return (<Grid container padding={2} display="flex" justifyContent="space-between">
        <Grid item lg={3} >
            <Menu value={itemName} disableStatus={true} defaultValue={itemName}/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" value={PRate} disabled/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" value={mrp} disabled/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" type="number" value={gst} disabled/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" value={PRate*(gst/100+1)*quantity} disabled/>
        </Grid>
        <Grid item lg={1} display="flex" justifyContent="center">
            <IconButton area-label='send' onClick={handleDelete}>
                <Delete sx={{ display: "flex", width: "50px", height: "50px", color: "red" }} />
            </IconButton>
        </Grid>
        {/* <Grid item lg={1} display="flex" justifyContent="center">
            <IconButton area-label='send' >
                <SendSharp sx={{ display: "flex", width: "50px", height: "50px", color: "green" }} />
            </IconButton>
        </Grid> */}
    </Grid>)
}