import { Typography } from "@mui/material";

const About = ({data, loading, error }) => {


    if (loading) {
        return <p>
            LOADING ......
        </p>
    }
    if (error) {
        <p> ERRORR ......</p>
    }

    return (
        <section className="home-container color-white">
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