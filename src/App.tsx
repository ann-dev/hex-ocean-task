import React from "react";
import { ChakraProvider, Center } from "@chakra-ui/react";
import FormContainer from './features/form/FormContainer';

function App() {
  return (
    <ChakraProvider>
      <Center minH="100vh">
        <FormContainer />
      </Center>
    </ChakraProvider>
  );
}

export default App;
