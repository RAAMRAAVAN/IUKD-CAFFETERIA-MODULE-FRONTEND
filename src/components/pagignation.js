import React, {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {changePage,incrementPage,decrementPage} from "../redux/pagignation/pagignationActions"
function Pagignation()
{
    const [currentPageNo,setPageNo]=useState(1);
    let [S,setS]=useState(0);
    let [E,setE]=useState(5);

    const dispatch=useDispatch();
    const courses=useSelector(state=>state.user.filteredCourses)
    const numberofcourses=courses.length;
    
    let numberOfPages=Math.ceil(numberofcourses/6)

    let reset=()=>{
      setS(0);
      setE(5);
      setPageNo(1);
      numberOfPages=Math.ceil(numberofcourses/6)

      if(numberOfPages<10)
          E=numberOfPages;  

      dispatch(changePage(0));
  }

  useEffect(() => {
      reset();
    }, [numberofcourses]);

    if(numberOfPages<10)
        E=numberOfPages;  

  let PageNo=(value)=>
  {
    
    setPageNo(value);
    dispatch(changePage(value*6-6));
  }

  let CounterE=()=>
  {
    if(currentPageNo<numberOfPages)
        {
            setPageNo(currentPageNo+1);
            dispatch(incrementPage());
        }
        if(E<numberOfPages)
            {
                setS(S+1);
                setE(E+1);
            }
    }     
    let CounterS=()=>
    {
        if(currentPageNo>1)
        {
            setPageNo(currentPageNo-1);
            dispatch(decrementPage());
        }
        if(S>0)
        {
            setS(S-1);
            setE(E-1);
        }  
    }

return(
            <>
                <div className="App">
                <div className="pageContainer mb-5">
                {currentPageNo>1?<button className="pageNo" onClick={()=>{CounterS()}}><i className="fa fa-caret-left" aria-hidden="true"></i></button>:<button className=" disabled" disabled ><i className="fa fa-caret-left" aria-hidden="true"></i></button>}
                {
                    (()=>{
                        const options = [];
                        for(let i=S;i<E;i++)
                            options.push(<button key={i} className="pageNo" onClick={()=>PageNo(i+1)}>{i+1}</button>)
                        return options;
                    })()
                }
                {currentPageNo<numberOfPages?<button className="pageNo" onClick={()=>{CounterE()}}><i className="fa fa-caret-right" aria-hidden="true"></i></button>:<button className="disabled" onClick={()=>{CounterE()}}><i className="fa fa-caret-right" aria-hidden="true"></i></button>}
                </div>
                </div>
                
            </>
        );

}
export default Pagignation;