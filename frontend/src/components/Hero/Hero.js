import html from '../../assests/shop/html.png';
import css from '../../assests/shop/css.png';
import javascript from '../../assests/shop/javascript.png';
import testing from '../../assests/shop/testing.png';
import aws3 from '../../assests/shop/aws3.png';
import flask from '../../assests/shop/flask.png';
import reactjs from '../../assests/shop/reactjs.png';
import cloud from '../../assests/shop/cloud.png';
import celery from '../../assests/shop/celery.png';
import database from '../../assests/shop/database.png';
import django from '../../assests/shop/django.png';
import docker from '../../assests/shop/docker.png';
import fastapi from '../../assests/shop/fastapi.png';
import pandas from '../../assests/shop/pandas.png';
import postgres from '../../assests/shop/postgres.png';
import python from '../../assests/shop/python.png';
import rabbitmq from '../../assests/shop/rabbitmq.png';
import empty1 from '../../assests/shop/empty1.png';
import empty2 from '../../assests/shop/empty2.png';
import empty3 from '../../assests/shop/empty3.png';
import empty4 from '../../assests/shop/empty4.png';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
import Computer from '../Home/Computer';
import clsx from 'clsx';

const Hero = ({data, loading, error}) => {

    const [frontendActive, setFrontendActive] = useState(false);
    const [backendActive, setBackendActive] = useState(false);

    const frontendAnimationClass = clsx({
        hexagon: true,
        fe: true,
        fs: true,
        active: frontendActive,
        remove: (backendActive && !frontendActive)
    });
    const backendAnimationClass = clsx({
        hexagon: true,
        be: true,
        fs: true,
        active: backendActive,
        remove: (frontendActive && !backendActive)
    });
    const emptyAnimationClass = clsx({
        hexagon: true,
        em: true,
        remove: (frontendActive || backendActive)
    });


    const handleFrontendActive = () => {
        setFrontendActive(!frontendActive);
      };

    const handleBackendActive = () => {
        setBackendActive(!backendActive);
    };

    const handleFSActive = () => {
        if (!frontendActive) {
            setFrontendActive(true);
        }
        if (!backendActive) {
            setBackendActive(true);

        }
        if (frontendActive && backendActive){
            setFrontendActive(false);
            setBackendActive(false);
        }
    };

    return (
        <>
        <header id="shop-header">
            <nav id="shop-nav">   

            </nav>
        </header>

        <main id="shop-main" className="back-img">
            <div className="layer-container">

                    <Box sx={{
                        display: 'flex',
                        paddingLeft: '15px'
                        
                    }}
                    className='sub-line line1'
                    >
                        <img src={html} alt="" className={frontendAnimationClass} />
                        <img src={aws3} alt="" className={backendAnimationClass} />
                        <img src={empty2} alt="" className={emptyAnimationClass} />
                        <img src={database} alt="" className={backendAnimationClass}  />
                        <img src={fastapi} alt="" className={backendAnimationClass}  />
                        <img src={testing} alt="" className={backendAnimationClass}  />
                        <img src={reactjs} alt="" className={frontendAnimationClass} />
                        <img src={flask} alt="" className={backendAnimationClass}  />
                        <img src={empty1} alt="" className={emptyAnimationClass} />
                    </Box>

                    <Box
                    className='sub-line line3'
                    >
                        <img src={empty4} alt="" className={emptyAnimationClass} />
                        <img src={flask} alt="" className={backendAnimationClass}  />
                        <img src={css} alt="" className={frontendAnimationClass} />
                        <img src={rabbitmq} alt="" className={backendAnimationClass}  />
                        <img src={docker} alt="" className={backendAnimationClass}  />
                        <img src={pandas} alt="" className={backendAnimationClass}  />
                        <img src={empty3} alt="" className={emptyAnimationClass} />
                        <img src={django} alt="" className={backendAnimationClass}  />
                        
                    </Box>
                    <Box 
                    className='sub-line line5'
                    >
                        <img src={javascript} alt="" className={frontendAnimationClass} />
                        <img src={cloud} alt="" className={emptyAnimationClass} />
                        <img src={celery} alt="" className={backendAnimationClass}  />
                        <img src={postgres} alt="" className={backendAnimationClass}  />
                        <img src={python} alt="" className={backendAnimationClass}  />
                        
                        
                    </Box>

                <Box
                className='text-layer color-white'
                sx={{
                    alignItems: 'center',
                    mb:1
                }}
                >
                    <div className="font-large">
                        Hi, I am Hamdi
                    </div>
                    <div className="text-center font-edu-tas">
                        {loading && <Skeleton animation="wave" />}
                        {data && data[0].description}
                    </div>

                    
                </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1
                    }}>
                        <div className={`frontend font-edu-tas ${frontendActive && !backendActive ? 'checked' : ''}`} onClick={handleFrontendActive}>
                            Frontend
                        </div>
                        <div className={`backend font-jet-brains ${backendActive && !frontendActive ? 'checked' : ''} `} onClick={handleBackendActive}>
                            Backend
                        </div>
                        <div className={`full-stack ${backendActive && frontendActive ? 'checked' : ''}`} onClick={handleFSActive}>
                            Full Stack Developer
                        </div>
                    </Box>
  
            </div>


        </main>
        
        
        </>

    );
}
 
export default Hero;