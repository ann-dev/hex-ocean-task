import React from "react";
import { ChakraProvider, Center } from "@chakra-ui/react";
import Form from './features/form/Form';

function App() {
  return (
    <ChakraProvider>
      <Center minH="100vh">
        <Form />
      </Center>
    </ChakraProvider>
  );
}

export default App;
