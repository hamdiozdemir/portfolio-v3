
import axios from 'axios';


export const handleExternalLink = (url) => {
    window.open(url, "_blank");
};


export const useGet = async (url) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const rootUrl = getRootUrl('http://localhost');

    try {
        const response = await axios.get(`${rootUrl}/${url}`, config);
        const error = false;
        return { data: response.data, error };
    } catch (err) {
        const error = err.message;
        const data = false;
        return { data, error };
    }
};

export const getRootUrl = (url) => {
    const dev = false;

    if (dev) {
        return 'http://127.0.0.1:8000/api'
    } else {
        return `${url}:8000/api` 
    }
};