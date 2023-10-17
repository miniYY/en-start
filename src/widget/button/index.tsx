import './index.css'
interface ButtonProps {

    title: string
}


export const Button = (props: ButtonProps) => {

    const { title } = props
    return <button className='enbutton'>{title}</button>

}