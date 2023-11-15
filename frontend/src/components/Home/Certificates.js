import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Box from '@mui/material/Box';

const Certificates = () => {
    return (
        <div className="home-container">
            <Box
            sx = {{
                width: '100%',
                alignItems: 'flex-start'
            }}
            >
                <h1 className='text-center'>
                    CERTIFICATES
                </h1>
                <WorkspacePremiumIcon fontSize='large' />
                <WorkspacePremiumIcon fontSize='large' color='success' />
                <WorkspacePremiumIcon fontSize='large' />
                <WorkspacePremiumIcon fontSize='large' />

            </Box>

        </div>
        

    );
}
 
export default Certificates;