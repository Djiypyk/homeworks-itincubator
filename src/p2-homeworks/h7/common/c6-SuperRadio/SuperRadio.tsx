import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from  './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        onChange && onChange(e)
        onChangeOption && onChangeOption(newValue)
    }


    const mappedOptions: any[] = options ?
        options.map((o, i) => ( // map options with key
        <label key={name + '-' + i} className={styles.label}>

            <input className={styles.radio}
                type={'radio'}
                name={name}
                value={o}
                checked={o === value}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
