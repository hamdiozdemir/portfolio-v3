// MUI
import { Box } from "@mui/material";
//components
import Computer from "../Computer/Computer";
import keyboard from '../../assests/keyboard.png';

const Projects = () => {

    return (
        <section className="page">
            <div className="home-container">
            <h1 className="color-white">
                PROJECTS SAMPLES
            </h1>

            <Computer />

            <Box
            sx={{
                display: {xs: 'flex', sm: 'none'},
            }}
            className='flex-center-column'
            >
                <img className="keyboard" src={keyboard} alt="" />

            </Box>
            
            </div>

      </section>


    );
}
 
export default Projects;