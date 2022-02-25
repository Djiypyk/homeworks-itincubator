import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (e: number) => {
        setValue1(e)
    }

    const onChangeRangeDouble = ([v1, v2]: Array<number>) => {
        setValue1(v1);
        setValue2(v2)
    }

    return (
        <div>
            <hr/>
            <h2> Homeworks 11</h2>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeRangeDouble}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
