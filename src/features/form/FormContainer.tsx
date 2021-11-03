import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Divider, Heading } from "@chakra-ui/react";

import Form from "./Form";

export interface FormValues {
  name: string;
  preparation_time: string;
  type: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  preparation_time: yup
    .string()
    .required("This field is required")
    .min(8, "Incorrect time format, is too short"),
  type: yup.string().required("Please select a dish type first"),
  no_of_slices: yup.number().when("type", {
    is: "pizza",
    then: yup
      .number()
      .required("This field is required")
      .min(1, "Must be more than one slice"),
  }),
  diameter: yup.number().when("type", {
    is: "pizza",
    then: yup
      .number()
      .required("This field is required")
      .min(1, "Must be more than 1"),
  }),
  spiciness_scale: yup.number().when("type", {
    is: "soup",
    then: yup
      .number()
      .required("This field is required")
      .min(1, "Must be at least 1")
      .max(10, "Must be less than 10"),
  }),
  slices_of_bread: yup.number().when("type", {
    is: "sandwich",
    then: yup
      .number()
      .required("This field is required")
      .min(1, "Must be more than 1"),
  }),
});

const FormContainer: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Box>
      <Box borderWidth="1px" borderRadius="lg" boxShadow="lg" p={6} w="400px">
        <Heading as="h1" mb={4} size="md">
          Submit a dish 🍽
        </Heading>
        <Divider mb={4} />
        <Formik
          initialValues={{
            name: "",
            preparation_time: "",
            type: "",
          }}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm({
              values: {
                name: "",
                preparation_time: "",
                type: "",
              },
            });
          }}
        >
          {(formikProps) => <Form {...formikProps} />}
        </Formik>
      </Box>
    </Box>
  );
};

export default FormContainer;
