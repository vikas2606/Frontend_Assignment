import { createSlice, configureStore } from "@reduxjs/toolkit"

const userData = {
    name: "",
    age: 0,
}

const userSlice = createSlice({
    name: "user",
    initialState: userData,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload

        }
    }

})

const { setName, setAge } = userSlice.actions

const store = configureStore({
    reducer: userSlice.reducer
})

export { setName, setAge }
export default store

