import Projects from './Projects';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import About from './About';
import useFetchData from '../../utils/useFetchData';

const Home = () => {

    const mockPersonal = [{
      "id": 1,
      "description": "Experienced Python Developer in frontend and backend. Simply create web applications & APIs with passion.",
      "contacts": [
          {
          "id": 1,
          "website": "http://hamdiozdemir.tech",
          "linkedin": "https://www.linkedin.com/in/hamdi-%C3%B6zdemir-67a084201/",
          "github": "https://github.com/hamdiozdemir/",
          "email": "hamdiozdemir61@gmail.com",
          "phone": ""
        }

      ]
    }];


    const {data, loading, error } = useFetchData('profile');

    return (
        <>
        <Hero data={data} loading={loading} error={error} />
           

          <Projects />

          <About data={data} loading={loading} error={error} />


          <Contact mockPersonal={mockPersonal[0]} />
        </>


    );
}
 
export default Home;
