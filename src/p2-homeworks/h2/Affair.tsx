import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={styles.nameAffair}>
            <p className={styles[props.affair.priority]}>{props.affair.name}</p>
            <button className={styles.btnDel} onClick={deleteCallback}>X</button>
        </div>


    )

}

export default Affair
