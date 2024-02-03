import {useSelector} from "react-redux";
import React from "react";

function CourseContainer()
{
        const StoredCourses=useSelector(state=>state.user.filteredCourses); 
        const numberOfCourses=StoredCourses.length;
        const lb2=useSelector((state)=>state.pageNumber.pagenumber);
             let count=6;
             let ub;
            if(lb2===numberOfCourses-numberOfCourses%6 )
              count=numberOfCourses%6;
            ub=lb2+count;  

        let Courseitem=[];

        if(numberOfCourses>0 )
        {
            return( 
                <div className="container-xl container-fluid  mt-5">
                    <div className="row ">
                        {
                        (()=>{
                            const options = [];
                            for(let i=lb2;i<ub;i++)
                                {   
                                    Courseitem=StoredCourses[i];
                                    options.push(
                                        <div key={i} className="col-md-4 col-sm-6 row justify-content-center my-4">
                                    <a href={`${Courseitem["Url"]}`} className="link row justify-content-center p-md-0">
                                    <div className="col-11 rounded-3 content-shadow px-2 pt-4 pb-3">
                                    <div className="d-flex justify-content-between">
                                        <span className="BrushScriptMT">{Courseitem["Course Id"]}</span>
                                        <span>
                                            <i className="fa-solid fa-calendar-days"></i>
                                            <span className="BrushScriptMT">{Courseitem["Next Session Date"]}</span>
                                        </span>
                                    </div>
                                    <div className="fontw text-secondary">   provider     </div>
                                    <div className="h5 fw-bold">{Courseitem["Provider"]}</div>
                                    <div className="fontw text-secondary">   course name  </div>
                                    <div className="text-danger fw-bold">{Courseitem["Course Name"]}</div>
                                    <div className="fontw text-secondary">Universities/ Institutions   </div>
                                    <div className="fw-bold">{Courseitem["Universities/Institutions"]}</div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fontw text-secondary">Parent Subject</span>
                                        <span className="fontw text-secondary">Child Subject </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-bold pcsize">{Courseitem["Parent Subject"]}</span>
                                        <span className="fw-bold pcsize">{Courseitem["Child Subject"]}</span>
                                    </div>
                                    </div>
                                    </a>
                                </div>
                                    )
                                }
                            return options;
                        })()
                        }
                    </div>                    
                </div>      
                );
        }   
}
export default CourseContainer;