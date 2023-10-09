import './index.css'
import { Menu } from './menu'

interface ToolBarProps {

}


export const ToolBar = (props: ToolBarProps) => {


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
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-user"></use>
                </svg>
            </div>

        </div>
    </div>
}