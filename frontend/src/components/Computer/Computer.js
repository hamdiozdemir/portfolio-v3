// style
import './computer.css';
import React, { useState } from 'react';

// assets
import vsc from '../../assests/shop/vsc.png';
import windows from '../../assests/shop/windows.jpg';
import screen from '../../assests/screen.png';
import folder from '../../assests/folder.png';
import VscScreen from './VscScreen';
import PowerButton from './PowerButton';
import Folder from './Folder';
// components
import ProjectDetail from './ProjectDetail';
// utils
import { useDispatch } from 'react-redux';
import { add_browse_history } from '../../utils/actions';

const Computer = () => {
    const dispatch = useDispatch();
    const [isPowerOn, setIsPowerOn] = useState(null);
    const [currentScreenContent, setCurrentScreenContent] = useState('');

    const handleIsPowerOn = (data) => {
        setIsPowerOn(data);
        dispatch(add_browse_history("Computer power on/off"));
    };

    const handleScreenContent = (content) => {
        setCurrentScreenContent(content);
        dispatch(add_browse_history(`On computer, ${content} opened`));
    };

    return (
        <div className="laptop-container" id='computer'>
            <img src={screen} alt="" className="laptop-image" />

            {isPowerOn && <div className="laptop-screen">
                <img className='windows' src={windows} alt="" />

                <div className="icon-con vsc-position"
                onClick={() => handleScreenContent('vsc')}
                >
                    <img className='vsc-logo' src={vsc} alt="" />
                    vsc
                </div>
                <div className="icon-con folder-position"
                onClick={() => handleScreenContent('folder')}
                >
                    <img className='vsc-logo' src={folder} alt="" />
                    Projects
                </div>


                {(currentScreenContent === 'vsc') && 
                <VscScreen currentScreenContent={handleScreenContent} />}
                
                {(currentScreenContent === 'folder') && 
                <Folder currentScreenContent={handleScreenContent} />}
                
                {(currentScreenContent.slice(0, 7) === 'project') &&
                <ProjectDetail currentScreenContent={handleScreenContent} currentPage={currentScreenContent} />
                }


            </div>}


            <PowerButton isPower={handleIsPowerOn} />

        </div>

     



    );
}
 
export default Computer;