import React, {useState,useEffect}  from "react";
import {useSelector,useDispatch} from "react-redux";
import {UpdateGraphStatus} from "../redux/providerGraph/GraphActions"
import {UpdateParentGraphStatus} from "../redux/parentGraph/parentActions";
import Graph from "./Graph";
import Graph2 from "./Graph2";
import { fetchCoursesForGraph } from "../redux";
import {fetchCoursesForParent} from "../redux/parentGraph/parentActions";
function PrintingGraph()
{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchCoursesForGraph());
        dispatch(fetchCoursesForParent())
    },[]);
    
    const [graphMenu,setGraphMenu]=useState(false);
    const graph=useSelector(state=>state.providergraph);
    const graph2=useSelector(state=>state.parentgraph);
    
    // Graph
    let ProviderTrue=()=>{dispatch(UpdateGraphStatus(false)) 
    }

let ProviderFalse=()=>{dispatch(UpdateGraphStatus(true))
    ParentTrue()}

let ParentTrue=()=>{dispatch(UpdateParentGraphStatus(false))
    }
let ParentFalse=()=>{dispatch(UpdateParentGraphStatus(true))
    ProviderTrue()}
let hideGraph=()=>{
    setGraphMenu(false)
    ParentTrue()
    ProviderTrue()
} 

return  graph.loading || graph2.loading?(
    console.log("loading")
):  graph.error || graph2.error?(
    <div>error</div>
):(
    <div>
        <div className="d-flex flex-column col-12 align-items-center mt-4">
        {graphMenu?<button onClick={()=>{hideGraph()}} className="btn btn-primary">Hide Graph</button>:<button onClick={()=>{setGraphMenu(true)}} className="btn btn-primary" data-testid="graph">Show Graph</button>}
        <div className="mt-3">
            {graphMenu?graph.status?<button onClick={()=>{ProviderTrue()}} className="btn btn-outline-info me-2">Provider Subject Graph </button>:<button onClick={()=>{ProviderFalse()}} className="btn btn-outline-info me-2">Provider Subject Graph </button>:<></>}
            {graphMenu?graph2.status?<button onClick={()=>{ParentTrue()}} className="btn btn-outline-warning">Parent Subject Graph </button>:<button onClick={()=>{ParentFalse()}} className="btn btn-outline-warning">Parent Subject Graph </button>:<></>}
        </div>
    </div>
        {graph.status?<Graph/>:<></>} 
        {graph2.status?<Graph2/>:<></>}

    </div>
)
    
}
export default PrintingGraph;