import { configureStore } from "@reduxjs/toolkit"
import json_server from "./json_server";

export const store = configureStore({
    reducer: {
        json_server: json_server
    },
});