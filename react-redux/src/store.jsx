import { configureStore } from "@reduxjs/toolkit"
import {visibility} from './App';
import json_server from "./json_server";

export const store = configureStore({
    reducer: {
        json_server: json_server,
        visibility: visibility
    },
});