// components
import Projects from './Projects';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import About from './About';
// utils
import useFetchData from '../../utils/useFetchData';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { new_user } from '../../utils/actions';

const Home = () => {
    const { t, i18n } = useTranslation();
    const visitor = i18n.language;
    const dispatch = useDispatch();
    
    useEffect(() => {
      if (!localStorage.getItem('visitor') && !localStorage.getItem('lang')) {
        dispatch(new_user(visitor));
        console.log('yeni user eklendi.')
      };
      
    }, [dispatch, visitor]);
  

    const {data, loading, error } = useFetchData('profile');

    return (
        <>
        <Hero data={data} loading={loading} error={error} />
           
          <Projects />

          <About data={data} loading={loading} error={error} />

          <Contact data={data} loading={loading} error={error} />
        </>
    );
}
 
export default Home;
