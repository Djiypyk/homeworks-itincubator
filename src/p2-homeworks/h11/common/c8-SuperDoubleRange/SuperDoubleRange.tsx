import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {

        // onChangeRange && onChangeRange([+e.currentTarget.min, +e.currentTarget.max]) // need fix!!!!!

    }

    return (
        <>
            <Slider value={value} onChange={onChangeCallback}/>
        </>
    )
}

export default SuperDoubleRange
