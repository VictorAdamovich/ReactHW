import {Slider} from '@mui/material';
import React from 'react';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1: (value1: number) => void
    setValue2: (value2: number) => void
    min?:number
    max?:number
    step?:number
    disable?:number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, setValue1, setValue2,
        min, max, step, disable
    }
) => {
    // сделать самому, можно подключать библиотеки
    function valuetext(value: number) {
        return `${value}%`;
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0]);
            setValue2(newValue[1]);
        }
    };

    return (
        <div style={{width:'300px'}}>
            <Slider
                getAriaLabel={() => 'Range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </div>
    );
};

export default SuperDoubleRange;
