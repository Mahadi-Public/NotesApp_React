import { createSlice } from "@reduxjs/toolkit"

const saveTask = localStorage.getItem("TaskData")
const initialState = {
    tasks : saveTask ? JSON.parse(saveTask) : []
}

const taskSlicer = createSlice({
    name: "Task",
    initialState,
    reducers : {
        addTask : (state, action) =>{
            state.tasks = [ ...state.tasks, action.payload];
            localStorage.setItem("TaskData", JSON.stringify(state.tasks));
        },
        updateTask : (state, action) =>{
            const { id,name,title,description,createAt } = action.payload
            const task = state.tasks.find(task => task.id === id)
            if (task) {
                task.name = name,
                task.title = title,
                task.description = description,
                task.createAt = createAt
                localStorage.setItem("TaskData", JSON.stringify(state.tasks))
            }
        },
        deleteTask : (state, action) => {
            state.tasks = state.tasks.filter(taskId => taskId.id !== action.payload)
            localStorage.setItem("TaskData", JSON.stringify(state.tasks));
        }
    }
});

export const {addTask,updateTask,deleteTask} = taskSlicer.actions;
export default taskSlicer.reducer;
