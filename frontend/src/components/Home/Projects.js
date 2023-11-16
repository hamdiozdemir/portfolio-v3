import { Box, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import Computer from "./Computer";
import pythonLogo from '../../assests/pythonLogo.png';

import { handleExternalLink } from "../../utils/utils";

const Projects = () => {

    const data = [
        {
            "id":1,
            "header": "War of Six",
            "sub_header": "A Browser Strategy Game",
            "link": "http://warofsix.com",
            "github": "https://github.com/hamdiozdemir/",
            "techs": ["django", "html", "css", "celery", "s3"]
        },
        {
            "id":2,
            "header": "Order Tracker",
            "sub_header": "Order tracking and editing web app project",
            "link": "http://google.com",
            "github": "https://github.com/hamdiozdemir/",
            "techs": ["flask", "html", "css", "sqlalchemy"]
        },
        {
            "id":3,
            "header": "My Tree",
            "sub_header": "Link share web app project",
            "link": "https://google.com",
            "github": "https://github.com/hamdiozdemir/",
            "techs": ["flask", "html", "css", "postgres"]
        },
        {
            "id":4,
            "header": "Sciencelow",
            "sub_header": "Research articles summeries",
            "link": "https://google.com",
            "github": "https://github.com/hamdiozdemir/",
            "techs": ["flask", "html", "css", "requests", "beatifulsoup"]
        }
    ];

    const handleLink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <section className="page">
            <div className="home-container">
            <h1 className="color-white">
                PROJECTS SAMPLES
            </h1>

            <Computer />
            
            <br />
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1vw',
            }}
            >

                {data.map((item) => {
                    return (

                        <div className="project-card-container" key ={item.id}>
                            <div className="project-card">
                                    <div className="card-front">
                                        <div className="card-cover">
                                            <div className="card-text font-roboto"> { item.header } </div>

                                            <div className="sub-card-text"> { item.sub_header } </div>
                                            <div className="card-logo-container">
                                                <img className="card-logo" src={pythonLogo} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-back card-back2">
                                        <div> <b>{ item.header } </b> </div>
                                        <Stack direction="row" spacing={1}>
                                            <IconButton aria-label="github" onClick={() => handleExternalLink(item.github)}>
                                                <GitHubIcon fontSize="large" color='success'  />
                                            </IconButton>

                                            {item.link && <IconButton aria-label="link" color="primary" onClick={() => handleExternalLink(item.link)}>
                                                <LinkIcon fontSize="large" color='primary'  />
                                            </IconButton>}

                                        </Stack>

                                        <Box
                                        sx={{
                                            display:'flex',
                                            flexWrap:'wrap',
                                            width: '90%',
                                            justifyContent:'center',
                                            gap: "8px"
                                        }}
                                        >
                                            {item.techs.map((tech) => {

                                                return (
                                                    <div key={tech} className="tech-icon-container font-jet-brains flex-center-column font-11">
                                                        <img className="tech-icon" src={pythonLogo} alt="" />
                                                        {tech}
                                                    </div>
                                                    
                                                )
                                            })}

                                            {/* BU DENEME İÇİN / SİLİNECEK */}


                                        </Box>
                                    </div>

                            </div>


                        </div>
                      );
                })
                }

                

            </Box>


            </div>

      </section>


    );
}
 
export default Projects;