import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import styles from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] | undefined = options ?
        options.map((el, i) =>
            <option key={i} value={el}>{el}</option>) : options; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        onChange && onChange(e)
        onChangeOption && onChangeOption(newValue)

        // onChange, onChangeOption
    }

    return (
        <select
            className={styles.select}
            onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
