import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: Array<number>
    min?: number
    max?: number
    step?: number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max, step
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (event: ChangeEvent<{}>, value: number | number[]) => {
            onChangeRange && onChangeRange(value as number[])
    }

    return (
        <>
            <Slider color='secondary'
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={onChangeCallback}
            />
        </>
    )
}

export default SuperDoubleRange
