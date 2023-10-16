
import React from 'react'
interface PriceProps {

    unit?: string
    value?: number
    oldValue?: number
}


export const Price = (props: PriceProps) => {


    const { unit, value = 0, oldValue = 0 } = props



    //整数
    let integerValue = Math.floor(value)

    //小数
    function decimalValue() {
        let str = value.toString();
        let strIndex = str.indexOf('.');
        if (strIndex === -1) return '';
        str = str.substring(strIndex, strIndex + 3);
        return str
    }

    return <div >

        <span style={{ fontWeight: 'bold', fontSize: '22px' }}> {unit}{integerValue}</span>
        <span style={{ fontSize: '16px' }}>{decimalValue()}</span>

        {
            oldValue === 0 ? <></> : <span style={{ fontSize: '16px', margin: '0px 20px', textDecoration: 'line-through' }}>{unit}{oldValue}</span>
        }

    </div>
}