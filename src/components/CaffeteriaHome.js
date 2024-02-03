// import React,{useEffect} from "react";
// import {fetchUsers} from "../redux/user/userAction"
// import Filter from "./filter"
import { Box, Button, Tab } from "@mui/material";
import { Billing } from "./Billing";
import { CustomerInfo } from "./CustomerInfo";
import Header from "./Header"
import { Save } from "./Save";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { Favorite } from "@mui/icons-material";
import { CreateItem } from "./Items/CreateItem";
import { PurchaseBilling } from "./Purchase/PurchaseBilling";
import { fetchItems } from "../redux";
import { useDispatch, useSelector } from "react-redux";
// import Pagignation from "./pagignation";
// import Courses from "./Courses";
// import {useSelector,useDispatch} from "react-redux";
// import PrintingGraph from "./printingGraph";
function UserContainer() {
    const [value, setvalue] = useState("1");
    const handleChange = (event, newValue) => {
        setvalue(newValue);
    };
    const itemData=useSelector(state=>state.items)
    const dispatch=useDispatch();  
    console.log("itemData=", itemData.items.items)
    useEffect(()=>{
        dispatch(fetchItems());
    },[])
    return itemData.loading?(
        console.log("loading")
    ): itemData.error?(
        <div>{itemData.error}</div>
    ):(
        <><Header />
        <Box marginY="80px" padding={0} marginX={0} sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
                <TabContext value={value} padding={0} margin={0}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <TabList
                            aria-label="Tabs example"
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            centered
                            variant='scrollable'
                            scrollButtons='auto'
                        // sx={{display:"flex",justifyContent:"center"}}
                        >
                            <Tab label="Sales Bill" value="1" icon={<Favorite />} iconPosition='start' />
                            <Tab label="Purchase Bill" value="2" />
                            <Tab label="Return Bill" value="3" />
                            <Tab label="Current Stock" value="4" />
                            <Tab label="Purchase Report" value="5" />
                            <Tab label="Sales Report" value="6" />
                            <Tab label="Daily Report" value="7" />
                            <Tab label="Profit / Loss Calculator" value="8" />
                            <Tab label="Create Item" value="9" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ padding: "0", margin: "0" }}>
                        <CustomerInfo />
                        <Billing />
                        <Save />
                    </TabPanel>
                    <TabPanel value="2">
                        <PurchaseBilling/>
                    </TabPanel>
                    <TabPanel value="3">
                        <CustomerInfo />
                        <Billing />
                        <Save />
                    </TabPanel>
                    <TabPanel value="4">Panel Two</TabPanel>
                    <TabPanel value="5">Panel Two</TabPanel>
                    <TabPanel value="6">Panel Two</TabPanel>
                    <TabPanel value="7">Panel Two</TabPanel>
                    <TabPanel value="8">Panel Two</TabPanel>
                    <TabPanel value="9"><CreateItem/></TabPanel>
                </TabContext>
            </Box>
            {/* <Button>Sale Bill</Button>
            <Button>Purchase Bill</Button>
            <Button>Return Bill</Button> */}
        </Box>
    </>
    )
}
export default UserContainer;