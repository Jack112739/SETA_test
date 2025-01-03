import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  useSelector } from "react-redux";


export const get_data = createAsyncThunk('get_data', async () => {
    const api = useSelector(state => state.json_server.api_endpoint);
    const respond = await fetch(api);
    const data = await respond.json()
    return data;
});

export const post_data = createAsyncThunk('post_data', async (opt) => {
    console.log(opt);
    const api = useSelector((state) => state.json_server.api_endpoint);
    const new_post = {
        body: opt.body,
        title: opt.title,
        userId: opt.userId
    };
    const respond = await fetch(api, {
        method: 'POST',
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify(new_post)
    });
    return respond.status;

})
const server_slice = createSlice({
    name: 'json_server',
    initialState: {
        get_hook: {pending: true, data: null, error: null},
        post_hook: {pending: true, status: null},
        api_endpoint: ''
    },
    reducers: {
        reset: (state, action) => {
            if(action.payload == 'GET') {
                state.get_hook = {pending: true, data: null, error: null};
            }
            else if(action.payload == 'POST') {
                state.post_hook = {pending: true, status: null};
            }
        },
        init: (state, action) => {
            state.api_endpoint = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(get_data.fulfilled, (state, action) => {
            state.get_hook.pending = false;
            state.get_hook.data = action.payload;
        });
        builder.addCase(get_data.rejected, (state, action)=> {
            state.get_hook.pending = false;
            state.get_hook.error = action.payload;
        });
        builder.addCase(post_data.fulfilled, (state, action) => {
            state.post_hook.pending = false;
            state.post_hook.status = action.payload;
        })
        builder.addCase(post_data.rejected, (state, action) => {
            state.post_hook.status = action.payload;
            alert('can not upload, server returned with status ' + action.payload);
        })
    }
})
export const {init} = server_slice.actions;
export default server_slice.reducer;