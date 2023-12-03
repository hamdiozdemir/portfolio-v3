import { Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
const About = ({data, loading, error }) => {


    if (loading) {
        return <p>
            <div className="flex-column-center">
                <CircularProgress color="inherit" />
            </div>
        </p>
    }
    if (error) {
        <p> ERRORR ......</p>
    }

    return (
        <section className="home-container color-white mt20">
            <h1 className="color-white">ABOUT</h1>
            {data && (
                <div>
                {data.map((item) => (
                    <div  className="flex-center-column" key={item.id}>
                        <Typography
                        sx={{
                            fontSize: '2em'
                        }}>
                            {item.name}
                        </Typography>
                        <Typography
                        sx={{
                            fontSize: '1.3em',
                            textAlign: 'justify'
                        }}>
                            {item.about}
                        </Typography>

                    </div>
                    
                    ))}
              
                </div>
            )}

        </section>



    );
}
 
export default About;