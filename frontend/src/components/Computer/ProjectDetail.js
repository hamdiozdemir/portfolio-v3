// MUI
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
//utils
import { handleExternalLink } from "../../utils/utils";
import useFetchData from "../../utils/useFetchData";
import { useDispatch } from "react-redux";
import { add_browse_history } from "../../utils/actions";

const ProjectDetail = ({currentScreenContent, currentPage}) => {
    const dispatch = useDispatch();
    const handleScreenContent = (content) => {
        currentScreenContent(content);
    };
    const id = currentPage.slice(7);
    console.log(currentPage);
    const {data, loading, error } = useFetchData(`projects/${id}/`);
    console.log(data);

    return (
        <>
            <div className="screenContentContainer home-container color-white">
                
                <Box sx={{display: 'flex', width:'100%', p: 1, borderBottom:'1px black solid'}}>
                    <IconButton onClick={() => handleScreenContent('folder')}>
                        <KeyboardBackspaceIcon />
                        Back
                    </IconButton>
                </Box>

                {loading && 
                    <Box sx={{ width: 300 }}>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
                }

                {error && <div>An error has accured. Sorry.</div>}

                {data && 
                
                <Box className='flex-center-column color-white bottomUp-1' sx={{width: '100%', gap: 0}}>
                    <div className="font-large mt10">
                        {data.title}
                    </div>
                    <div className="font-medium font-edu-tas mt10 bottomUp-2 text-center">
                        {data.description}
                    </div>
                    <Stack direction="row" spacing={1} className="bottomUp-2">
                        <IconButton aria-label="github" onClick={() => { handleExternalLink(data.github); dispatch(add_browse_history
                        (`Redirected to ${data.github}`)); }}>
                            <GitHubIcon fontSize="large" sx={{color: '#00000'}}  />
                        </IconButton>

                        {data.link && <IconButton aria-label="link" 
                            onClick={() => {handleExternalLink(data.link); dispatch(add_browse_history(`Redirected to ${data.link}`))}}>
                            <LinkIcon fontSize="large" sx={{color: '#000000'}}  />
                        </IconButton>}

                    </Stack>
                    <div className="bottomUp-3">Tech Stacks</div>
                    <Box
                    className='flex-row-wrap bottomUp-4'
                    sx={{
                        width:'100%',
                        fontSize: {xs: '10px', sm: '12px'}
                    }}
                    >
                        {data.skills.map((item) => (
                            <div className="tech-stack-container flex-center-column">
                                <img src={item.image} alt="" className="tech-icon" />
                                <div> {item.name} </div>
                            </div>
                        ))}

                        

                    </Box>
                    {data.images && <div className="text-center">Gallery</div>}

                    {data.images &&
                        <Box
                    className='flex-row-wrap'
                    sx={{
                        padding: 3,
                        justifyContent: 'center',
                        gap: '3px'
                    }}
                    >
                        {data.images.map((item) => (
                            <img src={item.image} alt={item.text} className="project-image" placeholder={item.text} />
                        ))}

                    </Box>}
                </Box>
                
                }
            </div>

        </>
    );
}
 
export default ProjectDetail;