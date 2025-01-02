import {configureStore} from "@reduxjs/toolkit";
import users from './reducers/userSlice'



const store = configureStore({
    reducer:{
        users
    }
});

export default store