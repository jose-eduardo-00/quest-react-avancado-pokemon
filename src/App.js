import { ThemesProvider } from './contexts/themeContext.js';
import { AppRoutes } from './pages/routes.js';
import { createGlobalStyle } from 'styled-components';

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
  button{
    border: none;
    cursor: pointer;
  }
`