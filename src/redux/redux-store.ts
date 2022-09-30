import {combineReducers, createStore} from "redux";
import {myPostPageReducer} from "./myPostPage-reducer";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

let reducersBatch = combineReducers({
    myPostPage: myPostPageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(reducersBatch);

export type RootStateType = ReturnType<typeof reducersBatch>

export default store;