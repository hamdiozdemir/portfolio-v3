// components
import Projects from './Projects';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import About from './About';
import Notice from '../Notice/Notice';
// utils
import useFetchData from '../../utils/useFetchData';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { new_user } from '../../utils/actions';

const Home = () => {
    const { t, i18n } = useTranslation();
    const visitor = i18n.language;
    const dispatch = useDispatch();
    const notice = useSelector((state) => state.visitor.notice);
    
    useEffect(() => {
      if (!localStorage.getItem('visitor') && !localStorage.getItem('lang')) {
        dispatch(new_user(visitor));

      }
 
      
    }, [dispatch, visitor]);
  

    const {data, loading, error } = useFetchData('profile');

    return (
        <>
        <Hero data={data} loading={loading} error={error} />

          <About data={data} loading={loading} error={error} />
           
          <Projects />


          <Contact data={data} loading={loading} error={error} />

          { !notice && <Notice /> }

        </>
    );
}
 
export default Home;
