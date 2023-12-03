// utils
import useFetchData from "../../utils/useFetchData";
// MUI
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
// components
import CustomButton from '../MyButtons/CustomButton';
import BrowserTable from "./BrowserTable";
import { useDispatch } from "react-redux";
import { add_browse_history } from "../../utils/actions";
import { useEffect } from "react";


const BrowseHistory = () => {

    const dispatch = useDispatch();
    const visitor = localStorage.getItem('visitor');
    const { data, loading, error } = useFetchData(`browse-history?visitor=${visitor}`);
    
    useEffect(() => {
        dispatch(add_browse_history("Browse history viewed.", "view"));
    }, [])

    return (
        <>


            <Box
            sx={{ 
                backgroundColor: 'rgba(140, 227, 227, 0.2)'
            }}
            >
                <nav id="shop-nav">   
                    <CustomButton text={'HOME'} url={'/'} />

                </nav>
            </Box>
            


            <div className="home-container color-white mt20 heightFull">
                { loading && 
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                
            }

                { error && 
                    <div>An error has accured...</div>
                }

                { data && 
                
                <div className="flex-column-center">
                    <div> <b>Visitor ID:</b> {visitor} </div>

                    <Box
                    sx={{
                        width: '100%'
                    }}
                    >
                        <BrowserTable data={data} />
                       

                    </Box>
                </div>
                
                
                
                
            }

            </div>

        </>

    );
}
 
export default BrowseHistory;