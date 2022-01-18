import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import styles from './HW6.module.css'
import CreateIcon from '@material-ui/icons/Create';

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
    }

    return (
        <div >
            <hr/>
            <h2>Homeworks 6</h2>

            {/*should work (должно работать)*/}
            <div className={styles.wrapper_HW6}>
               <div> <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'Please enter text...'}}
                /> <CreateIcon fontSize={'small'}/></div>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>


        </div>
    )
}

export default HW6
