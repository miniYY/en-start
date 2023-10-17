import './index.css'


interface PageIndicatorProps {

    total?: number
    current?: number
}


export const PageIndicator = (props: PageIndicatorProps) => {


    const { total = 5, current = 1 } = props
    return <div >
        {
            (() => {
                let temp = [];
                for (let index = 0; index < total; index++) {
                    if (index == 4) {
                        temp.push(<button className= {index==current-1?'indicator-page-select':'indicator-page'}>...</button>)
                    } else if (index < 4) {
                        temp.push(<button className={index==current-1?'indicator-page-select':'indicator-page'}>{index + 1}</button>)
                    } else if (index == total - 1) {
                        temp.push(<button className={index==current-1?'indicator-page-select':'indicator-page'}>{index + 1}</button>)
                    }
                }
                return temp;
            })()
        }

    </div>
}