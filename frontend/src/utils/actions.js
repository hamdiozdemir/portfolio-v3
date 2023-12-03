import {userLoadedSuccess, userDelete} from '../redux/visitor';
import axios from 'axios';
import { useSelector } from 'react-redux';

const rootUrl = 'http://127.0.0.1:8000/api';
const visitor = localStorage.getItem('visitor') ? localStorage.getItem('visitor') : null;

export const new_user = (lang) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({lang});
    console.log('POST REQ');

    try {
        const response = await axios.post(`${rootUrl}/visitors/`, body, config);
        dispatch(userLoadedSuccess(response.data));
    } catch (err) {
        // dispatch(userDelete);
        console.log(err);
    }

};


export const send_message = (name, email, message) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const visitor = localStorage.getItem('visitor') ? localStorage.getItem('visitor') : null;
    const body = JSON.stringify({name, email, message, visitor});

    try {
        const response = await axios.post(`${rootUrl}/contact-form/`, body, config);
        console.log(body);
    } catch (err) {
        console.log(err);
    }
};


export const add_browse_history = (action) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const visitor = localStorage.getItem('visitor') ? localStorage.getItem('visitor') : null;
    const body = JSON.stringify({action, visitor});

    try {
        const response = await axios.post(`${rootUrl}/browse-history/`, body, config);
    } catch (err) {
        console.log(err);
    }
};
