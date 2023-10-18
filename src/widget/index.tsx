import { useNavigate } from 'react-router-dom'
import './index.css'
import { Menu } from './menu'

interface ToolBarProps {

}


export const ToolBar = (props: ToolBarProps) => {


    const navigate = useNavigate()
    return <div id='toolbar'>

        <div className='toolmenu-container'>
            <span>Clubhouse</span>
            <div className='toolmenu-middle'>

                <Menu />
            </div>
            <div className='toolmenu-right'>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-search"></use>
                </svg>

                <a onClick={()=>navigate('cart')}>  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-cart"></use>
                </svg>
                </a>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-user"></use>
                </svg>
            </div>

        </div>
    </div>
}