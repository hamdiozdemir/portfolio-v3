import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import pythonLogo from '../../assests/pythonLogo.png';

const SkillCards = ({skills}) => {

    const [ cardVisibilty, setCardVisibility] = useState(false);

    const frontendData = skills.find(item => item.category === "frontend");
    const backendData = skills.find(item => item.category === "backend");
    
    const [frontendChecked, setFrontEndChecked] = useState(false);
    const [backendChecked, setBackendChecked] = useState(false);
    const [fullStackChecked, setFullStackChecked] = useState(false);

    const handleFEChecked = () => {
      setFrontEndChecked(!frontendChecked);
      if (!frontendChecked){
        setBackendChecked(false);
        
        };
    }
    const handleBEChecked = () => {
      setBackendChecked(!backendChecked);
      if (!backendChecked) {
        setFrontEndChecked(false);
      };
    }
    const handleFSChecked = () => {
        if (!frontendChecked) {
            setFrontEndChecked(true);
        }
        if (!backendChecked) {
            setBackendChecked(true);
        }
        if (frontendChecked && backendChecked) {
            setBackendChecked(false);
            setFrontEndChecked(false);
        }
    };

    useEffect(() => {
      
        const timer1 = setTimeout(() => {
          setCardVisibility(true);
        }, 2000);
        return () => clearTimeout(timer1);
      }, []);

    return (
        <Box
        className='flex-wrap'
        >
            <div className="card-container">
                <div className={ `card frontend ${frontendChecked ? 'checked' : ''}` }
                onClick={handleFEChecked}
                >
                    <div className="card-front font-edu-tas">
                        frontend
                    </div>

                    <div className="card-back">
                        {
                            frontendData.techs.map(item => (
                                <div className="tech-icon-container font-edu-tas flex-center-column font-16">
                                    <img className="tech-icon" src={pythonLogo} alt="" />
                                     { item.name } 
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className={`card backend ${backendChecked ? 'checked' : ''}`}
                onClick={handleBEChecked}
                >
                    <div className="card-front font-jet-brains">
                        backend
                    </div>

                    <div className="card-back">
                    {
                            backendData.techs.map(item => (
                                <div className="tech-icon-container font-jet-brains flex-center-column font-14">
                                    <img className="tech-icon" src={pythonLogo} alt="" />
                                     { item.name } 
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="card-container full-stack"
            onClick={handleFSChecked}
            >
                <div className="card">
                    <div className="card-front roboto">
                        FULL STACK DEVELOPMENT
                    </div>

                    <div className="card-back">
                        SKİLLLSS ARE HERE
                    </div>
                </div>
            </div>

        </Box>
    );
}
 
export default SkillCards;