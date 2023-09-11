import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes.js';
import { ThemesProvider } from './contexts/themeContext.js';

function App() {
    return (
        <ThemesProvider>
            <GlobalStyle />
            <AppRoutes />
        </ThemesProvider>
    );
}

export default App;


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #000;
  }
  a{
    text-decoration: none;
  }
`