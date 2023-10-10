import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
interface PortalProps {

    children?: React.ReactNode
    show?: boolean
}
const Portal = (props: PortalProps) => {
    var node = document.createElement('div');

    useEffect(() => {
        document.body.appendChild(node)
    })

    const { show, children } = props;

    return <div>
        {
            show === true ? ReactDOM.createPortal(children, node) : <></>
        }
    </div>
}
export default Portal