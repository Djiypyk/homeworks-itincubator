import React, {useState} from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {RequestAPI} from "../bll/RequestAPI";


export const Request = () => {
    const [checkValue, setCheckValue] = useState<boolean>(false)
    const [response, setResponse] = useState<any>({})

    const onChangeCheckbox = () => {
        setCheckValue(!checkValue)
    }

    const onRequestSend = () => {
        RequestAPI.createRequest(checkValue)
            .then(res => {
                console.log(res.data)
                setResponse(res.data)
            })
            .catch(error => {
                    console.log({...error})
                    console.log(error.response ? error.response.data.errorText : error.message);
                    setResponse(error.response.data)
                }
            )
    }
    return <>
        <input type="checkbox" checked={checkValue} onChange={onChangeCheckbox}/>
        <SuperButton onClick={onRequestSend}>Send request</SuperButton>
        <h3>{response.errorText}</h3>
        <h4>{response.info}</h4>
    </>
}