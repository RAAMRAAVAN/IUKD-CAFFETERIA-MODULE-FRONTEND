import {FETCH_PARENT_FAILURE,FETCH_PARENT_REQUEST,FETCH_PARENT_SUCCESS ,UPDATE_PARENT_DATA,UPDATE_PARENT_LABELS,UPDATE_PARENT_STATUS,VALUE_PARENT_STATUS,DATA_PARENT_STATUS,UPDATE_PARENT_SEARCH   } from "./parentTypes"
// 
import axios from "axios";
const fetchCoursesForParentRequest=()=>{
    console.log("inside fetchuserrequest");
    return{
        type: FETCH_PARENT_REQUEST
    }
}

const fetchCoursesForParentSuccess=users=>{
    return{
        type: FETCH_PARENT_SUCCESS,
        payload: users
    }
}

const fetchCoursesForParentFailure=error=>{
    return{
        type: FETCH_PARENT_FAILURE,
        payload: error
    }
}
export const fetchCoursesForParent=()=>{
    let searchValue=["Parent Subject"];
    let uniqueCourses=[];
    let uniqueLengths=[];
    let i=0;
    let numberOfCourses=0;
    return (dispatch)=>{
        dispatch(fetchCoursesForParentRequest);
        axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        .then(response=>{
            const sortedCourses=response.data.sort((next,prev)=>{
                if(next[searchValue]>prev[searchValue])
                    return 1;
                else
                    return -1;    
                });
                numberOfCourses=sortedCourses.length;
                while(i<numberOfCourses)
            {
                let search=sortedCourses[i][searchValue];
    
            /********************** creating array of each unique restaurant **********************/
                let searchData=sortedCourses.filter(function(value)
                    {
                        return(value[searchValue]===search);
                    });
            /********************** calculating sum or ratings for each unique restaurant **********************/
            uniqueCourses.push(search);
            uniqueLengths.push(searchData.length);
                i=i+searchData.length;
            }
            dispatch(fetchCoursesForParentSuccess(sortedCourses))
            dispatch(UpdateParentLabels(uniqueCourses));
            dispatch(UpdateParentData(uniqueLengths));
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchCoursesForParentFailure(errorMsg))
        })
    }
} 
// 
export const UpdateParentData=(val)=>{
    return{
        type: UPDATE_PARENT_DATA,
        payload: val
    }
}
export const UpdateParentLabels=(val)=>{
    return{
        type: UPDATE_PARENT_LABELS,
        payload: val
    }
}
export const UpdateParentGraphStatus=(val)=>{
    return{
        type: UPDATE_PARENT_STATUS,
        payload: val
    }
}
export const UpdateParentDataStatus=(val)=>{
    return{
        type: DATA_PARENT_STATUS,
        payload: val
    }
}
export const UpdateParentVataStatus=(val)=>{
    return{
        type: VALUE_PARENT_STATUS,
        payload: val
    }
}   
export const UpdateParentGraphSearch=(val)=>{
    return{
        type: UPDATE_PARENT_SEARCH,
        payload: val
    }
}   
