import './components/card-pokemon/index.js'
import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes.js'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
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