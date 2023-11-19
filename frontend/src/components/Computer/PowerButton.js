import { useState } from 'react';
import powerButton from '../../assests/powerButton.png';
import clsx from 'clsx';

const PowerButton = ({isPower}) => {

    const [power, setPower] = useState(false);
    const powerOnButton = clsx({
        powerbutton: true,
        powerOn: power,
        powerOff: !power
    });

    const powerClickHandle = () => {
        setPower(!power);
        isPower(!power);
    };

    return (
        <div className="power-button-container" onClick={powerClickHandle}>
            <img className={powerOnButton} src={powerButton} alt="Power Button" />

        </div>
    );
}
 
export default PowerButton;