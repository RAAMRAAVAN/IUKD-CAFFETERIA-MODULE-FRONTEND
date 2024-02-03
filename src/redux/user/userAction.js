import { FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,APPLY_FILTER} from "./userTypes";
import axios from "axios";
const fetchUsersRequest=()=>{
    console.log("inside fetchuserrequest");
    return{
        type: FETCH_USER_REQUEST
    }
}

const fetchUsersSuccess=users=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}


const fetchUsersFailure=error=>{
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest);
        axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        .then(response=>{
            const users=response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
} 

export const filterCourses=(value)=>{
    return{
        type: APPLY_FILTER,
        payload: value
    }
} 