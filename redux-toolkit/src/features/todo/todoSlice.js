// creating reducer in this file
// basically reducers are kind of functionality

import {createSlice, nanoid} from '@reduxjs/toolkit'


// first step in store is to set the initial state
//  starting m store kaise hoga..kya values initially hongi usme

// intial state can be object or array
const initialState = {
todos:[{id : 1, text: "hello world"}]
}

// ab is createSlice function ko create karna

export const todoSlice = createSlice({

    name: 'todo', // name is a default property we have to define
    initialState, // passing the intial state
    // declaring the reducers then
    reducers:{

        // state defines the current state of the reducer, and action defines the value a function takes
        // for eg: in removeTodo , an id is passed for the value that has to be removed, that value being passed 
        // is an action

        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo) // state ko update krenge yaha pr..after addTodo
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>{todo.id !==action.payload})
         }
    }
})

// individually bhi functionalities ko export kr rhe hai yaha par

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
// ye above two statements ..we have to write them..means wo ayenge hi ayenge
