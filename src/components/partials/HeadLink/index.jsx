import { useNavigate } from "react-router-dom"

const HeadLink = (props) => {
    const navigate = useNavigate()
    return (
        <a  type="button" 
            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent cursor-pointer"
            value="Home" onClick={() => navigate(props.target)}>{props.text}</a>
    )
}
export default HeadLink