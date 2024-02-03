import { Delete, SendSharp } from "@mui/icons-material"
import { Grid, IconButton, TextField } from "@mui/material"
import { Menu } from "../Menu"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const PurchaseBillItem = (props) => {
    const [itemName, SetItemName] = useState(null);
    const [PRate, SetPRate] = useState(0);
    const [quantity, SetQuantity] = useState(0);
    const [mrp, SetMrp]=useState(0);
    const [gst, SetGST] = useState(0);
    const [netAmount, SetNetAmount] = useState(0);
    const [item, Setitem] = useState(false)
    const itemData = useSelector(state => state.items.items.items)
    const ResetValues = () => {
        SetItemName(null);
        SetPRate(0);
        SetQuantity(0);
        SetMrp(0);
        Setitem(true);
        SetGST(0);
        // SetNetAmount(0);
    }
    // const ResetItemName = () => {
    //     Setitem(false);
    //     return(null)
    // }
    useEffect(() => {
        SetNetAmount(PRate*(gst/100+1)*quantity)
      }, [quantity]);
    // console.log("gst=",PRate*(gst/100+1)*quantity)
    
    const AddNewItem = props.AddItem
    return (<Grid container padding={2} display="flex" justifyContent="space-between">
        <Grid item lg={3} >
            <Menu SetItemName={SetItemName} SetPRate={SetPRate} SetMrp={SetMrp} SetGST={SetGST}/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" value={PRate} />
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" type="number" value={quantity} onChange={(e)=>{SetQuantity(e.target.value)}}/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" value={mrp} />
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" type="number" value={gst}/>
        </Grid>
        <Grid item lg={1}>
            <TextField textAlign="center" value={PRate*quantity} />
        </Grid>
        {/* <Grid item lg={1} display="flex" justifyContent="center">
            <IconButton area-label='send' >
                <Delete sx={{ display: "flex", width: "50px", height: "50px", color: "red" }} />
            </IconButton>
        </Grid> */}
        <Grid item lg={1} display="flex" justifyContent="center">
            <IconButton area-label='send' onClick={()=>{AddNewItem(itemName, PRate, quantity, mrp, gst,PRate*(gst/100+1)*Number(quantity)); ResetValues()}}>
                <SendSharp sx={{ display: "flex", width: "50px", height: "50px", color: "green" }} />
            </IconButton>
        </Grid>
    </Grid>)
}