import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home/Home';
import ProjectDetail from './components/Computer/ProjectDetail';
import { useEffect } from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';


import { new_user } from './utils/actions';

function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Router>
        <div className="App">

          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/projects/:id" element={ <ProjectDetail /> } />

          </Routes>

          

            



        </div>

      </Router>

    </ThemeProvider>
  );
}

export default App;
