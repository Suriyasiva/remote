import { ChakraProvider } from '@chakra-ui/react';
import Remote from './app/Remote';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Remote />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
