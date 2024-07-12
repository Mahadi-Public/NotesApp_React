import { configureStore } from "@reduxjs/toolkit";
import taskSlicer from "./taskSlicer";
import contactSlicer from "./contactSlicer";


const store = configureStore({
    reducer : {
        task : taskSlicer,
        contact : contactSlicer,
    }
})

export default store

