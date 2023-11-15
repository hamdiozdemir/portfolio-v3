import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './components/Home/Home';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Router>
        <div className="App">

          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/shop" element={ <Hero /> } />

          </Routes>

          

            



        </div>

      </Router>

    </ThemeProvider>
  );
}

export default App;
