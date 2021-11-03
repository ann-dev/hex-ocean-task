import React from "react";
import { FormikProps, Field, FieldProps } from "formik";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";

import { FormValues } from "./FormContainer";
interface FormProps extends FormikProps<FormValues> {}

const renderNameField = ({ field, form }: FieldProps) => {
  return (
    <FormControl isInvalid={!!form.errors.name}>
      <FormLabel htmlFor="name">Dish name</FormLabel>
      <Input {...field} id="name" placeholder="Spicy BBQ Pizza" type="text" />
      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    </FormControl>
  );
};

const renderPrepTimeField = ({ field, form }: FieldProps) => {
  return (
    <FormControl isInvalid={!!form.errors.preparation_time}>
      <FormLabel htmlFor="preparation_time">Preparation time</FormLabel>
      <Input {...field} id="preparation_time" placeholder="00:00:00" type="text" />
      <FormErrorMessage>{form.errors.preparation_time}</FormErrorMessage>
    </FormControl>
  );
};

const renderTypeField = ({ field, form }: FieldProps) => {
  return (
    <FormControl isInvalid={!!form.errors.type}>
      <FormLabel htmlFor="type">Type of dish</FormLabel>
      <Select {...field} id="type" placeholder="Select a type">
        <option value="pizza">Pizza 🍕</option>
        <option value="soup">Soup 🍜</option>
        <option value="sandwich">Sandwich 🥪</option>
      </Select>
      <FormErrorMessage>{form.errors.type}</FormErrorMessage>
    </FormControl>
  );
};

const renderPizzaSlicesField = ({ field, form }: FieldProps) => {
  return (
    <FormControl isInvalid={!!form.errors.no_of_slices}>
      <FormLabel htmlFor="no_of_slices">Amount of slices</FormLabel>
      <NumberInput>
        <NumberInputField {...field} id="no_of_slices" />
      </NumberInput>
      <FormErrorMessage>{form.errors.no_of_slices}</FormErrorMessage>
    </FormControl>
  );
};

const renderDiameterField = ({ field, form }: FieldProps) => {
  return (
    <FormControl isInvalid={!!form.errors.diameter}>
      <FormLabel htmlFor="diameter">Pizza diameter</FormLabel>
      <NumberInput>
        <NumberInputField {...field} id="diameter" />
      </NumberInput>
      <FormErrorMessage>{form.errors.diameter}</FormErrorMessage>
    </FormControl>
  );
};

const renderSpicyScaleField = ({ field, form }: FieldProps) => {
  return (
    <FormControl isInvalid={!!form.errors.spiciness_scale}>
      <FormLabel htmlFor="spiciness_scale">Spiciness scale (from 1 to 10)</FormLabel>
      <NumberInput>
        <NumberInputField {...field} id="spiciness_scale" />
      </NumberInput>
      <FormErrorMessage>{form.errors.spiciness_scale}</FormErrorMessage>
    </FormControl>
  );
};

const renderBreadSlicesField = ({ field, form }: FieldProps) => {
  return (
    <FormControl isInvalid={!!form.errors.slices_of_bread}>
      <FormLabel htmlFor="slices_of_bread">Amount of bread slices</FormLabel>
      <NumberInput>
        <NumberInputField {...field} id="slices_of_bread" />
      </NumberInput>
      <FormErrorMessage>{form.errors.slices_of_bread}</FormErrorMessage>
    </FormControl>
  )
}

const Form: React.FC<FormProps> = ({ handleSubmit, values }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box mb={4}>
        <Field name="name">{renderNameField}</Field>
      </Box>
      <Box mb={4}>
        <Field name="preparation_time">{renderPrepTimeField}</Field>
      </Box>
      <Box mb={4}>
        <Field name="type">{renderTypeField}</Field>
      </Box>
      {values.type === "pizza" ? (
        <Box mb={4}>
          <Field name="no_of_slices">{renderPizzaSlicesField}</Field>
        </Box>
      ): ""}
      {values.type === "pizza" ? (
        <Box mb={4}>
          <Field name="diameter">{renderDiameterField}</Field>
        </Box>
      ): ""}
      {values.type === "soup" ? (
        <Box mb={4}>
          <Field name="spiciness_scale">{renderSpicyScaleField}</Field>
        </Box>
      ): ""}
      {values.type === "sandwich" && (
        <Box mb={4}>
          <Field name="slices_of_bread">{renderBreadSlicesField}</Field>
        </Box>
      )}
      <Button
        colorScheme="red"
        onClick={() => handleSubmit}
        type="submit"
        width="100%"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
