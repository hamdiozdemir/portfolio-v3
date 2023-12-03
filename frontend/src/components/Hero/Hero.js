// assets
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
import sqla from '../../assests/shop/sqla.png';
import restapi from '../../assests/shop/restapi.png';
import git from '../../assests/shop/git.png';
import empty1 from '../../assests/shop/empty1.png';
import empty2 from '../../assests/shop/empty2.png';
import empty3 from '../../assests/shop/empty3.png';
import empty4 from '../../assests/shop/empty4.png';
// MUI
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
//utils
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
// components
import CustomButton from '../MyButtons/CustomButton';
import { add_browse_history } from '../../utils/actions';

const Hero = ({data, loading, error}) => {

    const dispatch = useDispatch();
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
        dispatch(add_browse_history("Frontend button clicked"));
      };

    const handleBackendActive = () => {
        setBackendActive(!backendActive);
        dispatch(add_browse_history("Backend button clicked"));
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
        dispatch(add_browse_history("FullStack button clicked"));
    };

    return (
        <section className='hero-root'>

        <main id="shop-main" >
            <header id="shop-header">
                <nav id="shop-nav">
                    <Box sx={{ml: 'auto'}}>
                        <CustomButton text={'Browse History'} url={'/browse-history'} />
                    </Box>   
                
                </nav>
            </header>
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
                        <img src={testing} alt="" className={emptyAnimationClass}  />
                        <img src={reactjs} alt="" className={frontendAnimationClass} />
                        <img src={flask} alt="" className={backendAnimationClass}  />
                        <img src={empty1} alt="" className={emptyAnimationClass} />
                        <img src={restapi} alt="" className={backendAnimationClass} />
                    </Box>

                    <Box
                    className='sub-line line3'
                    >
                        <img src={empty4} alt="" className={emptyAnimationClass} />
                        <img src={sqla} alt="" className={backendAnimationClass}  />
                        <img src={css} alt="" className={frontendAnimationClass} />
                        <img src={rabbitmq} alt="" className={backendAnimationClass}  />
                        <img src={docker} alt="" className={backendAnimationClass}  />
                        <img src={git} alt="" className={`${emptyAnimationClass} fs` } />
                        <img src={pandas} alt="" className={backendAnimationClass}  />
                        <img src={empty3} alt="" className={emptyAnimationClass} />
                        <img src={django} alt="" className={backendAnimationClass}  />
                        
                    </Box>
                    <Box 
                    className='sub-line line5'
                    >
                        <img src={postgres} alt="" className={backendAnimationClass}  />
                        <img src={cloud} alt="" className={emptyAnimationClass} />
                        <img src={celery} alt="" className={backendAnimationClass}  />
                        <img src={javascript} alt="" className={frontendAnimationClass} />
                        <img src={python} alt="" className={backendAnimationClass}  />
                        <img src={empty2} alt="" className={emptyAnimationClass}  />
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
                            Full Stack
                        </div>
                    </Box>
  
            </div>


        </main>
        
        
        </section>

    );
}
 
export default Hero;