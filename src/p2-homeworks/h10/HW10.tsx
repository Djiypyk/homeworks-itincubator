import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import spinner from './Fidget-spinner.gif'

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <h2> Homeworks 10 </h2>
            {isLoading
                ? (
                    <div style={{textAlign: 'center'}} ><img src={spinner} alt="Spinner loader"/></div>
                ) : (
                    <div style={{textAlign: 'center'}}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
