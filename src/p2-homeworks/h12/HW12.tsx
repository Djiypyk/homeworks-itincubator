import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes: string[] = ['dark', 'red', 'some', 'light'];

function HW12() {
    const theme: string = useSelector<AppStoreType, string>(state => state.themeReducer.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span>
               <h2 className={s[`${theme}-text`]}> Homeworks 12 </h2>
            </span>
            <div className={s.radio_wrapper}>
                <SuperRadio name={'radio'} options={themes} onChangeOption={onChangeCallback}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
