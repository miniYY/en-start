
import React from 'react';


interface GridDataType {

    value: string,
    introduce?:string,
    talk?:string
}


interface GridProps {
    column?: number,
    dataRender?: any,
    data: GridDataType[],


}



const GirdView = (props: GridProps) => {

    const { column = 5, data, dataRender } = props
    const [lineView, setLineView] = React.useState([])

    function lineCount() {
        return data.length / 5
    }


    function renderView() {

        return <div>
            {
                data.map((ele, index) => {

                    return <span>

                        <div style={{ display: 'inline-block', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', width: '200px', padding: '20px 0px' }}>

                        {ele.value}
                        <div style={{clear:'both',fontSize:'12px',fontWeight:'normal'}}>{ele.talk}</div>
                        <div style={{clear:'both',fontSize:'12px',fontWeight:'normal'}}>{ele.introduce}</div>


                        </div>
                        {
                            (index + 1) % column == 0 ? <br /> : <></>
                        }
                    </span>
                })
            }

        </div>




    }
    return <div>
        {

            renderView()

        }
    </div>
}

export default GirdView;