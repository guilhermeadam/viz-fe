import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DefaultTheme from './styles/themes/default';

import GlobalStyles from './styles/global';

import Layout from './components/Layout';
import Router from './Router';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Layout>
          <Sidebar />
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
