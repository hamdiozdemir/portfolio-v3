import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { noticeUnderstood } from '../../redux/visitor';
import { useState } from 'react';
import clsx from 'clsx';


const Notice = () => {
    const dispacth = useDispatch();
    const [notice, setNotice] = useState(localStorage.getItem('notice'));
    const noticeContainer = clsx({
        noticeContainer: true,
        hide: notice
    })
    return (
        <div className={noticeContainer}>
            <div>! Important Notice</div>
            <div>Hi. I am just trying to track some actions that visitors have made in this website anonymously.</div>
            <Button variant="contained" 
                onClick={() => { 
                    dispacth(noticeUnderstood());
                     setNotice(true); 
                    } }
                >Understand</Button>
        </div>
    );
}
 
export default Notice;