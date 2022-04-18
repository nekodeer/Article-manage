import { applyMiddleware, combineReducers, createStore } from "redux";
import setUser from "./reducers/setUserReducer";
import thunk from "redux-thunk";
import setPage from "./reducers/setPage";
import { composeWithDevTools } from "redux-devtools-extension";


const allReducer = combineReducers({setUser,setPage})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))