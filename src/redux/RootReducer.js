import { combineReducers } from "redux"
import commentReducer from "./comments/commentReducer";
import postReducer from "./posts/postReducer";
import userReducer from './user/userReducer';

export default combineReducers({post:postReducer, user:userReducer, comment: commentReducer});
