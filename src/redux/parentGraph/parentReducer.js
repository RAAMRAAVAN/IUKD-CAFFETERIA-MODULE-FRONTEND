import {FETCH_PARENT_FAILURE,FETCH_PARENT_REQUEST,FETCH_PARENT_SUCCESS ,UPDATE_PARENT_DATA,UPDATE_PARENT_LABELS,UPDATE_PARENT_STATUS,VALUE_PARENT_STATUS,DATA_PARENT_STATUS,UPDATE_PARENT_SEARCH   } from "./parentTypes"
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
const parentReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PARENT_REQUEST:
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
        case FETCH_PARENT_SUCCESS:
            return{
                loading:false,
                error:""
            }    
        case FETCH_PARENT_FAILURE:
            return{
                loading:false,
                error: action.payload,
                courses:[]
            } 
        
        case UPDATE_PARENT_DATA: return{
            ...state,
            data:action.payload
        }
        case UPDATE_PARENT_LABELS: return{
            ...state,
            labels:action.payload
        }
        case UPDATE_PARENT_STATUS: return{
            ...state,
            status:action.payload
        }
        case VALUE_PARENT_STATUS: return{
            ...state,
            valueStatus:action.payload
        }
        case DATA_PARENT_STATUS: return{
            ...state,
            dataStatus:action.payload
        }
        case UPDATE_PARENT_SEARCH: return{
            ...state,
            graphSearchValu:action.payload
        }
        default: return state    
    }
}
export default parentReducer;