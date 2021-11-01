import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const Form = (): JSX.Element => {
  const [name, setName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [type, setType] = useState("");
  const [pizzaSlices, setPizzaSlices] = useState("");
  const [diameter, setDiameter] = useState("");
  const [spicyScale, setSpicyScale] = useState(1);
  const [breadSlices, setBreadSlices] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    alert(`Name: ${name}; Preparation time: ${prepTime}; Type: ${type};`);
    if (type === "pizza") {
      alert(`Number of slices: ${pizzaSlices}; Diameter: ${diameter}`);
    }
    if (type === "soup") {
        alert(`Spicy scale: ${spicyScale} of 10;`);
      }
    if (type === "sandwich") {
      alert(`Number of slices: ${breadSlices};`);
    }
  };

  return (
    <Box>
      <Box borderWidth="1px" borderRadius="lg" boxShadow="lg" p={6} w="400px">
        <Heading as="h1" mb={4} size="md">
          Submit a dish 🍽
        </Heading>
        <Divider mb={4} />
        <form>
          <FormControl id="name" isRequired>
            <FormLabel>Dish name</FormLabel>
            <Input
              type="name"
              placeholder="Spicy BBQ Pizza"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setName(event.target.value)
              }
            />
          </FormControl>
          <FormControl id="preparation_time" mt={4} isRequired>
            <FormLabel>Preparation time</FormLabel>
            <Input
              type="time"
              step="2"
              value={prepTime}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setPrepTime(event.target.value)
              }
            />
          </FormControl>
          <FormControl id="type" mt={4} isRequired>
            <FormLabel>Type of dish</FormLabel>
            <Select
              placeholder="Select a type"
              value={type}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                setType(event.target.value)
              }
            >
              <option value="pizza">Pizza 🍕</option>
              <option value="soup">Soup 🍜</option>
              <option value="sandwich">Sandwich 🥪</option>
            </Select>
          </FormControl>
          {type === "pizza" && (
            <>
              <FormControl id="no_of_slices" mt={4} isRequired>
                <FormLabel>Amount of slices</FormLabel>
                <NumberInput max={16} min={2}>
                  <NumberInputField
                    value={pizzaSlices}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ): void => setPizzaSlices(event.target.value)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl id="diameter" mt={4} isRequired>
                <FormLabel>Pizza Diameter</FormLabel>
                <NumberInput>
                  <NumberInputField
                    step="0.01"
                    value={diameter}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ): void => setDiameter(event.target.value)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </>
          )}
          {type === "soup" && (
            <FormControl id="spiciness_scale" mt={4} isRequired>
              <FormLabel>Spiciness Scale (out of 10)</FormLabel>
              <Slider
                aria-label="slider-ex-1"
                colorScheme="red"
                max={10}
                min={1}
                onChange={(value: number) => setSpicyScale(value)}
                value={spicyScale}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb children={spicyScale} h={25} w={25} />
              </Slider>
            </FormControl>
          )}
          {type === "sandwich" && (
            <FormControl id="slices_of_bread" mt={4} isRequired>
              <FormLabel>Amount of slices</FormLabel>
              <NumberInput max={12} min={2}>
                <NumberInputField
                  value={breadSlices}
                  onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                  ): void => setBreadSlices(event.target.value)}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          )}
          <Button
            type="submit"
            colorScheme="red"
            mt={6}
            onClick={handleSubmit}
            variant="solid"
            w="100%"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
