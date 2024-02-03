import { FETCH_ITEM_FAILURE,FETCH_ITEM_REQUEST,FETCH_ITEM_SUCCESS } from "./itemTypes";

const initialState={
    loading:false,
    items:[],
    filteredCourses:[],
    error:""
}
const itemReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_ITEM_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_ITEM_SUCCESS:
            return{
                loading:false,
                items:action.payload,
                // filteredCourses:action.payload,
                error:""
            }    
   
        case FETCH_ITEM_FAILURE:
            return{
                loading:false,
                error: action.payload,
                users:[]
            } 
        // case APPLY_FILTER:
        //     return{
        //         ...state,
        //         filteredCourses:action.payload
        //     }    
        default: return(state);       
    }
}
export default itemReducer;