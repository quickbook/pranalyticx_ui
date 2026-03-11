import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Index from './pages/Index';
import About from './pages/About';
import ITServices from './pages/ITServices';
import EduTech from './pages/EduTech';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/edutech" element={<EduTech />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
