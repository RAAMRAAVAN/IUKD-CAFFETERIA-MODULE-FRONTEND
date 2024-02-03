import { FETCH_GRAPH_FAILURE,FETCH_GRAPH_REQUEST,FETCH_GRAPH_SUCCESS ,UPDATE_DATA,UPDATE_LABELS,UPDATE_STATUS,VALUE_STATUS,DATA_STATUS,UPDATE_GRAPH_SEARCH   } from "./graphTypes"
const initialState={
    loading:true,
    // 
    data:[],
    labels:[],
    status:false,
    dataStatus:false,
    valueStatus:false,
    graphSearchValu:""
}
const graphReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_GRAPH_REQUEST:
            return{
                ...state,
                loading:true,
                data:[],
                labels:[],
                status:false,
                dataStatus:false,
                valueStatus:false,
                graphSearchValu:""
            }
        case FETCH_GRAPH_SUCCESS:
            return{
                loading:false,
                error:""
            }    
        case FETCH_GRAPH_FAILURE:
            return{
                loading:false,
                error: action.payload,
                courses:[]
            } 
        
        case UPDATE_DATA: return{
            ...state,
            data:action.payload
        }
        case UPDATE_LABELS: return{
            ...state,
            labels:action.payload
        }
        case UPDATE_STATUS: return{
            ...state,
            status:action.payload
        }
        case VALUE_STATUS: return{
            ...state,
            valueStatus:action.payload
        }
        case DATA_STATUS: return{
            ...state,
            dataStatus:action.payload
        }
        case UPDATE_GRAPH_SEARCH: return{
            ...state,
            graphSearchValu:action.payload
        }
        default: return state    
    }
}
export default graphReducer;