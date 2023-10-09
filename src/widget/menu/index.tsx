import './index.css'
import React from 'react'
interface MenuProps {

    children?: React.ReactNode
}


export const Menu = (props: MenuProps) => {


    const [hoverPos, setHoverPosi] = React.useState(-1)


    function menuStyle(num: number) {
        return 'tab ' + (num == hoverPos ? 'tab-select' : '')
    }

    return <div id='menu-container'>
        <button className={menuStyle(0)} onClick={() => setHoverPosi(0)}>Christmas</button>
        <button className={menuStyle(1)} onClick={() => setHoverPosi(1)}>Hot</button>
        <button className={menuStyle(2)} onClick={() => setHoverPosi(2)}>gift</button>
    </div>
}