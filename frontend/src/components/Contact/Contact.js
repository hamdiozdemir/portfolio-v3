import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect, useState } from 'react';
import { handleExternalLink } from '../../utils/utils';

const Contact = (props) => {
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [replaceMessage, setReplaceMessage] = useState('');
    const [isFake, setIsFake] = useState(true);

    const fakeMessage = "Hi Hamdi. You look like a really good developer. I want to work with you asap. Please get in touch with me !";

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      const { contacts } = props.mockPersonal;

      useEffect(() => {
        if (isFake) {
            setReplaceMessage(
                fakeMessage.slice(0, contactData.message.length)
            );
        }
        
      }, [fakeMessage, contactData.message, isFake])


    return (
        <section className="home-container">
            <div className="color-white">
                <div className='font-large text-center'>
                    Want to contact ?
                </div>
                <div className='font-large text-center'>
                    Send a Message ...
                </div>
            </div>

            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 2,
                    p: 2,
                    background: '#fff'
                    
                    
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                sx={{
                    width: '70vw'
                }}
                id="outlined-basic" label="Name" variant="outlined" 
                value={contactData.name}
                onChange={(e) => setContactData({...contactData, name: e.target.value})}
                {...(contactData.name ? {color: "success"}: {} )}
                {...(contactData.name ? {focused: true}: {} )}
                />
                
                <TextField
                sx={{
                    width: '70vw'
                }}
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                onFocus={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
                helperText={isTyping && (isEmailValid ? '' : 'Invalid email.')}
                error={isTyping && (isEmailValid ? '' : true)}
                value={ contactData.email }
                onChange={(e) => setContactData({...contactData, email: e.target.value})}
                {...(isEmailValid ? {color: "success"}: {})}
                {...(isEmailValid ? {focused: true}: {})}

                onKeyDown={(e) => setIsEmailValid(validateEmail(e.target.value))}
                />
                
                
                <TextField
                sx={{
                    width: '70vw',
                }}
                multiline
                minRows="8"
                id="outlined-basic" label="Message" variant="outlined" 
                {...(isFake ? {value: replaceMessage} : {value: contactData.message})}
                onChange={(e) => setContactData({...contactData, message: e.target.value})}
                
                />

                <FormControlLabel
                    sx={{
                    display: 'block',
                    }}
                    control={
                    <Switch
                        checked={isFake}
                        onChange={() => setIsFake(!isFake)}
                        name="isFake"
                        color="primary"
                    />
                    }
                    label="Disable that joke!"
                />

                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>

            </Box>
            <div className='font-large text-center color-white'>
                    OR just choose your way to reach me !
            </div>



            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 4,
                
            }}
            >
                <IconButton aria-label='link' 
                    onClick={(e) => {
                    window.location.href = `mailto:${contacts.email}`;
                    e.preventDefault();
                }}>
                    <EmailIcon fontSize="large" 
                        sx={{color: '#fff'}} />

                </IconButton>
                

                <MoreHorizIcon  sx={{color: '#fff'}} />

                <IconButton aria-label='link' 
                    onClick={() => 
                        handleExternalLink(contacts[0].linkedin)
                    }
                >
                    <LinkedInIcon fontSize="large" 
                    sx={{color: '#fff'}} 
                    />

                </IconButton>
                <MoreHorizIcon  sx={{color: '#fff'}} />


                <IconButton aria-label='link' 
                    onClick={() => 
                        handleExternalLink()
                    }>
                    <GitHubIcon fontSize="large" sx={{color: '#fff'}} />
                </IconButton>


            </Box>


        </section>
    );
}
 
export default Contact;