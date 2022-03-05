import React from 'react'
import axios from "axios";

type PostRequest = {}

export const RequestAPI = {
    createRequest: (body: boolean) => {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: body})

    }
}

