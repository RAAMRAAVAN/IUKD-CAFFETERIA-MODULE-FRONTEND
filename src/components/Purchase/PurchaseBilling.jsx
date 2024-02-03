import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material"
// import { BillReport } from "./BillReport"
import { Menu } from "../Menu"
import { Cancel, Delete, Send, SendSharp } from "@mui/icons-material"
import { PurchaseBillReport } from "./PurchaseBillReport"
import { PurchaseBillItem } from "./PurchaseBillItem"
import { useEffect, useState } from "react"
import { AddedItems } from "./AddedItems"
import { PurchaseBillInfo } from "./PurchaseBillInfo"
import axios from "axios"

export const PurchaseBilling = () => {
    const [billno, SetBillNo] = useState();
    const [partyno, SetPartyNo] = useState();
    const [partyName, SetPartyName] = useState("Store");
    const [date, SetDate] = useState();
    const [value, SetValue] = useState(0);
    const [gst, SetGst] = useState(0);

    const EditBillInfo=(Billno, Partyno, PartyName, Date)=>{
        SetBillNo(Billno);
        SetPartyNo(Partyno);
        SetPartyName(PartyName);
        SetDate(Date);

    }
    // console.log("bill details: ", billno, partyno, partyName, date)
    const [item, SetItem] = useState([]);
    const AddItem = (itemName, PRate, quantity, mrp, gst,netAmount) => {
        
        SetItem([...item, { "itemName": itemName, "PRate": Number(PRate), "quantity": Number(quantity), "mrp": Number(mrp), "gst": Number(gst), "netAmount": Number(netAmount) }]);
        
    }
    console.log("items=",item);
    // let updatedArray = [];
    const EditItem = (indexToUpdate, PRate, quantity, mrp, gst,netAmount) => {
        // Update the state immutably using the set function
        console.log("working", {  "PRate": Number(PRate), "quantity": Number(quantity), "mrp": Number(mrp), "gst": Number(gst), "netAmount": Number(netAmount) })
        SetItem(prevArray => {
            // Create a new array with the updated object at the specified index
            return prevArray.map((item, index) => {
                if (index === indexToUpdate) {
                    // Update the properties of the object at the specified index
                    return { ...item, "PRate": Number(PRate), "quantity": Number(quantity), "mrp": Number(mrp),"gst":Number(gst), "netAmount": Number(netAmount) };
                }
                return item; // For other indices, return the original object
            });
        });
        // SetValueOfGoods(item.reduce((value, currentItem) => value + currentItem.PRate, 0)*quantity)
    }
    useEffect(()=>{
        SetValue(item.reduce((value, currentItem) => value + (currentItem.PRate * currentItem.quantity), 0))
        console.log("item for gst",item)
        
        SetGst(item.reduce((value, currentItem) => value + ((currentItem.PRate * currentItem.quantity * currentItem.gst/100)), 0))
    },[item])

    const billDetails = {
        "billno": billno,
        "partyno": partyno,
        "partyName": partyName,
        "date": date,
        "items": item,
        "TotalValue": value,
        "TotalGST": gst,
        "TotalBillValue": gst+value,
    }
    const SaveBill = async() => {
        try {
            // Define the API endpoint URL for the POST request
            const apiUrl = 'http://localhost:5000/create-purchase-bill';

            // Make the POST request using Axios
            const response = await axios.post(apiUrl, billDetails);

            // Handle successful response
            console.log('Response from server:', response.data);
        } catch (error) {
            // Handle error
            console.error('Error making POST request:', error);
        }
    }
    return (<>
        <PurchaseBillInfo EditBillInfo={EditBillInfo} partyName={partyName}/>
        <Box padding={5}>
            <Typography display="flex" maxWidth sx={{ backgroundColor: "blue", color: "white", fontWeight: "bold" }} paddingY={1} paddingX={2} variant="h6">Caffeteria Bill</Typography>
            <Box border="1px black solid" sx={{ backgroundColor: "pink" }}>
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
                        <Typography fontWeight="bold" textAlign="center">MRP</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> GST %</Typography>
                    </Grid>
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Net Amount</Typography>
                    </Grid>
                    {/* <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Cancel Item</Typography>
                    </Grid> */}
                    <Grid item lg={1}>
                        <Typography fontWeight="bold" textAlign="center"> Add/Cancel Item</Typography>
                    </Grid>
                </Grid>

                {item.map((items, index) => {
                    console.log("item ", item)
                    return (<AddedItems EditItem={EditItem} itemName={items.itemName} PRate={items.PRate} quantity={items.quantity} mrp={items.mrp} gst={items.gst} SetItem={SetItem} item={item} index={index} netAmount={items.netAmount} />)
                })}
                <PurchaseBillItem AddItem={AddItem} />
            </Box>
            <PurchaseBillReport value={value} gst={gst}/>
        </Box>
    </>)
}