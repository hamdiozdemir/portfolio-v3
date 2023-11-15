
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

    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/${url}`, config);
        const error = false;
        return { data: response.data, error };
    } catch (err) {
        const error = err.message;
        const data = false;
        return { data, error };
    }
};