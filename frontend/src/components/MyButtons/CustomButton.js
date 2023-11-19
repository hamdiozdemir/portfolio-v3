import {useNavigate} from 'react-router-dom';
import './CustomButton.css';

const HomeButton = ({text, url}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(url);
    };

    return (
        <div className="button-container" onClick={handleClick}>
            {text}
        </div>
    );
}
 
export default HomeButton;