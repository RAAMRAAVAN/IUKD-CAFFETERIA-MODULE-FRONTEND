import {FETCH_GRAPH_FAILURE,FETCH_GRAPH_REQUEST,FETCH_GRAPH_SUCCESS ,UPDATE_DATA,UPDATE_LABELS,UPDATE_STATUS,VALUE_STATUS,DATA_STATUS,UPDATE_GRAPH_SEARCH   } from "./graphTypes"
// 
import axios from "axios";
const fetchCoursesForGraphRequest=()=>{
    console.log("inside fetchuserrequest");
    return{
        type: FETCH_GRAPH_REQUEST
    }
}

const fetchCoursesForGraphSuccess=users=>{
    return{
        type: FETCH_GRAPH_SUCCESS,
        payload: users
    }
}

const fetchCoursesForGraphFailure=error=>{
    return{
        type: FETCH_GRAPH_FAILURE,
        payload: error
    }
}
export const fetchCoursesForGraph=()=>{
    let searchValue=["Provider"];
    let uniqueCourses=[];
    let uniqueLengths=[];
    let i=0;
    let numberOfCourses=0;
    return (dispatch)=>{
        dispatch(fetchCoursesForGraphRequest);
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
            dispatch(fetchCoursesForGraphSuccess(sortedCourses))
            dispatch(UpdateGraphLabels(uniqueCourses));
            dispatch(UpdateGraphData(uniqueLengths));
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchCoursesForGraphFailure(errorMsg))
        })
    }
} 
// 
export const UpdateGraphData=(val)=>{
    return{
        type: UPDATE_DATA,
        payload: val
    }
}
export const UpdateGraphLabels=(val)=>{
    return{
        type: UPDATE_LABELS,
        payload: val
    }
}
export const UpdateGraphStatus=(val)=>{
    return{
        type: UPDATE_STATUS,
        payload: val
    }
}
export const UpdateDataStatus=(val)=>{
    return{
        type: DATA_STATUS,
        payload: val
    }
}
export const UpdateVataStatus=(val)=>{
    return{
        type: VALUE_STATUS,
        payload: val
    }
}   
export const UpdateGraphSearch=(val)=>{
    return{
        type: UPDATE_GRAPH_SEARCH,
        payload: val
    }
}   
