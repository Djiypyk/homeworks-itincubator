import React, {ChangeEvent, KeyboardEvent} from 'react'
import styles from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyDownAddName: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownAddName} // деструктуризация пропсов
) => {

    const inputClass = error === '' ? '' : styles.error// need to fix with (?:)
    const btnClass = error === '' ? styles.btn_add : styles.btn_add + ' ' + styles.btn_block
    const disabledBtn = error !== '';


    return (
        <div>
            <div className={styles.text_container}>
                <input value={name} onChange={setNameCallback} onKeyPress={onKeyDownAddName} className={inputClass}/>
                <button disabled={disabledBtn} className={btnClass} onClick={addUser}>Add</button>
            </div>
            <div className={styles.counter}>Count Users: {totalUsers}</div>
            <div className={styles.errorItem}>{error}</div>
        </div>
    )
}

export default Greeting
