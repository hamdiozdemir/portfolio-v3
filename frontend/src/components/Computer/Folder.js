// MUI
import { Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import pythonLogo from "../../assests/pythonLogo.png";
// utils
import { handleExternalLink } from "../../utils/utils";
import useFetchData from "../../utils/useFetchData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_browse_history } from "../../utils/actions";

const Folder = ({currentScreenContent}) => {
    const dispacth = useDispatch();
    const {data, loading, error } = useFetchData('projects');
    
    const handleScreenContent = (content, title) => {
        currentScreenContent(content);
        dispacth(add_browse_history(`On computer, project: ${title} opened`));
    };
    const [currentProject, setCurrentProject] = useState('');

    return (
        <Box
        className='screenContentContainer'
        >
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                p: '0 10px',
                background: 'rgb(215,215,215)'
            }}
            >
                <IconButton 
                sx={{
                    p:'3px'
                }}
                aria-label="close-button"
                onClick={() => handleScreenContent(' ')}
                >
                    <CloseIcon fontSize='small' sx={{p:0}}
                        />
                </IconButton>
            </Box>
            <Box
            sx={{
                width: '100%',
                border: 1,
                p: {xs: 0, sm: 1},
                fontSize: {xs: '10px', sm: '1em'}
                
                
            }}
            >
                {currentProject && 
                <IconButton
                sx={{
                    p:'3px'
                }} 
                aria-label="close-button"
                onClick={() => handleScreenContent(' ')}
                >
                    <KeyboardBackspaceIcon fontSize="small"/>
                </IconButton>}

                {`/Home/Projects/${currentProject}`}
            </Box>

            <div className="project-list-container">
                {loading && <div>Loading . . .</div>}
                {error && <div>An error has accured. Sorry..</div>}
                {data && 
                    data.map((item) => (
                        <div className="project-card-container" key={item.id} 
                        onClick={() => handleScreenContent(`project${item.id}`, item.title)}
                        >
                            <div className="project-icon-container">
                                <img src={pythonLogo} alt="" className="pythonLogo" />
                            </div>
                            <div className="project-title text-center">
                                {item.title}
                            </div>

                        </div>
                    ))
                }



            </div>

        </Box>

    );
}
 
export default Folder;