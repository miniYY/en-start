import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import Portal from '..';

import '../index.css'
interface ModalProps {
    ok?: Function | boolean
    close?: Function | boolean
    cancel?: Function | boolean
    title?: string
    closeIcon?: boolean
    children?: React.ReactNode
    operateAble?: boolean
    visible?: boolean

}
const Modal = (props: ModalProps) => {
    const {
        visible = false,
        ok = true,
        close = false,
        cancel = true,
        title,
        closeIcon = false,
        children,
        operateAble = true } = props

    const [show, setShow] = useState(visible)
    function closeModal() {

        if (typeof cancel === 'function') {
            cancel()
        } else {
            if (typeof cancel === 'boolean') {
                if (cancel) {
                    setShow(false)
                }
            }
        }
    }

    function confirmModal() {
        if (typeof ok === 'function') {
            ok()
        } else {
            if (typeof ok === 'boolean') {
                if (ok) {
                    setShow(false)
                }
            }
        }
    }

    function maskClick() {
        if (typeof close === 'function') {
            close()
        } else {
            if (typeof close === 'boolean') {
                if (close) {
                    setShow(false)
                }
            }
        }
    }


    return <Portal show={show}>
        <div className="modal-wrapper">
            <div
                className="mask"
                onClick={maskClick}
            >
                <div className='modal-container' onClick={(e) => {
                    e.stopPropagation()
                }} >
                    <div className="modal-title" >
                        {
                            title === undefined ? <></> :
                                <span>{title}</span>
                        }
                        {
                            closeIcon ? <span>x</span> : <></>
                        }
                    </div>
                    <div className="modal-content">{children}</div>
                    {
                        operateAble ? <div className="modal-operator">

                            <button
                                onClick={confirmModal}
                                className="modal-operator-confirm"
                            >确认</button>
                            <button
                                onClick={closeModal}
                                className="modal-operator-close"
                            >取消</button>
                        </div> : <></>
                    }
                </div>
            </div>

        </div>
    </Portal>
}

export default Modal;





Modal.show = (props: ModalProps) => {
    const { ok = true, cancel = true, close = true, title, closeIcon = false, children, operateAble = false } = props


    //弹窗隐藏进度条
    document.body.style.overflow = 'hidden'
    let element = document.createElement('div');
    document.body.appendChild(element);
    const onCloseEvent = () => {
        // ReactDOM.render(getModalNode(false), element)

        document.body.style.overflow = 'auto'
        ReactDOM.unmountComponentAtNode(element);
        element.remove();
    }
    const afterClose = () => {


        if (typeof close === 'function') {
            close();
        } else {
            if (typeof close === 'boolean' && close) {
                onCloseEvent();
            }
        }
    }
    const onOkEvent = () => {
        if (ok && typeof ok === 'function') {
            const maybePromise = ok;
            if (maybePromise instanceof Promise) {
                maybePromise
                    .then(() => {
                        onCloseEvent();
                    })
            } else {
                onCloseEvent();
            }
        } else {
            if (typeof ok === 'boolean' && ok) {
                onCloseEvent();
            }
        }
    }
    const onCancelEvent = () => {
        if (cancel && typeof cancel === 'function') {
            const maybePromise = cancel;
            if (maybePromise instanceof Promise) {
                maybePromise
                    .then(() => {
                        onCloseEvent();
                    })
            } else {
                onCloseEvent();
            }
        } else {
            if (typeof cancel === 'boolean' && cancel) {
                onCloseEvent();
            }
        }
    }
    const getModalNode = (show: boolean) => {

        let modalNode = null;
        modalNode = (
            <Modal
                visible={show}
                title={title}
                closeIcon={closeIcon}
                operateAble={operateAble}
                close={afterClose}
                ok={onOkEvent}
                cancel={onCancelEvent}
            >
                {children}
            </Modal>
        )
        return modalNode;
    }
    ReactDOM.render(getModalNode(true), element)
    return {
        hide: onCloseEvent
    }
}
