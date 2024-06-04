import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { styled } from 'styled-components';
import Home from './routes/home';
import reset from 'styled-reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [],
  },
]);

const GlobalStyles = createGlobalStyle` 
  ${reset};
  * {
    box-sizing: border-box;
    .scroll {
      overflow: hidden;
    }
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
