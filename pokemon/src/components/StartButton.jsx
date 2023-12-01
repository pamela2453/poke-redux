import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import './ComponentList.css';

const StartButton = ({ isFavorite, onClick}) => {
    const Icon = isFavorite ? StarFilled : StarOutlined 
    return <Button  className="button" icon={<Icon/>} onClick={onClick}></Button>
}

export default StartButton