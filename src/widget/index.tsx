import './index.css'

interface ToolBarProps {

}


export const ToolBar = (props: ToolBarProps) => {


    return <div id='toolbar'>

        <div className='toolmenu-container'>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-settings"></use>
            </svg>
        </div>
    </div>
}