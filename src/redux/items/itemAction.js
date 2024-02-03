import { FETCH_ITEM_FAILURE,FETCH_ITEM_REQUEST,FETCH_ITEM_SUCCESS} from "./itemTypes";
import axios from "axios";
const fetchItemsRequest=()=>{
    console.log("inside fetchItemRequest");
    return{
        type: FETCH_ITEM_REQUEST
    }
}

const fetchItemsSuccess=users=>{
    return{
        type: FETCH_ITEM_SUCCESS,
        payload: users
    }
}


const fetchItemsFailure=error=>{
    return{
        type: FETCH_ITEM_FAILURE,
        payload: error
    }
}
export const fetchItems=()=>{
    return (dispatch)=>{
        dispatch(fetchItemsRequest);
        axios.get('http://localhost:5000/get-all-items')
        .then(response=>{
            const Items=response.data
            dispatch(fetchItemsSuccess(Items))
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchItemsFailure(errorMsg))
        })
    }
} 

// export const filterCourses=(value)=>{
//     return{
//         type: APPLY_FILTER,
//         payload: value
//     }
// } 