import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import filterReducer from "./filter/filterReducer";
import pagignation from "./pagignation/pagignationReducer";
import graphReducer from "./providerGraph/graphReducer";
import parentReducer from "./parentGraph/parentReducer"
import itemReducer from "./items/itemReducer";

const rootReducer= combineReducers({
    // user: userReducer,
    // filterCourses: filterReducer,
    // pageNumber: pagignation,
    // providergraph: graphReducer,
    // parentgraph: parentReducer
    items: itemReducer
})
export default rootReducer