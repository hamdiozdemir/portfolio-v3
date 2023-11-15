import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const Deneme = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = 'http://127.0.0.1:8000/api/profile/1/';

  
    useEffect(() => {
      // Make an Axios GET request to a JSON API endpoint
      axios.get(url)
        .then((response) => {
          setData(response.data);
          setLoading(false);

        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading && <div>LOADING .... </div>}
            {data && 
            <ul>

                <li> {data.id} </li>
                <li> {data.name} </li>
                <li> {data.email} </li>
                <li> {data.description} </li>
            </ul>

            }
        </div>

    );
}
 
export default Deneme;