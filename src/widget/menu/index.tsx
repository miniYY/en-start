import { useNavigate } from 'react-router-dom'
import './index.css'
import React from 'react'
interface MenuProps {

    children?: React.ReactNode
}


export const Menu = (props: MenuProps) => {


    const navigate = useNavigate()
    const [hoverPos, setHoverPosi] = React.useState(-1)


    function menuStyle(num: number) {
        return 'tab ' + (num === hoverPos ? 'tab-select' : '')
    }
    function menuClick(index: number, path: string) {
        setHoverPosi(index)
        navigate('shop/' + path)
    }

    return <div id='menu-container'>
        {
            ['Christmas', 'Hot', 'Gift'].map((element, index) => {
                return <button className={menuStyle(index)} onClick={() => menuClick(index, element)}>{element}</button>

            })
        }
    </div>
}