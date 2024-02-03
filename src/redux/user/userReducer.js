import { FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,APPLY_FILTER } from "./userTypes";

const initialState={
    loading:false,
    users:[],
    filteredCourses:[],
    error:""
}
const userReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                filteredCourses:action.payload,
                
                error:""
            }    
   
        case FETCH_USER_FAILURE:
            return{
                loading:false,
                error: action.payload,
                users:[]
            } 
        case APPLY_FILTER:
            return{
                ...state,
                filteredCourses:action.payload
            }    
        default: return(state);       
    }
}
export default userReducer;