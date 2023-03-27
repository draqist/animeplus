import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const logInValues = {
  email: "",
  password: "",
};
const forgotValues = {
  email: "",
};

const phoneRegExp = /^((\+234)|0)[789]\d{9}$/;

const forgotValidation = Yup.object().shape({
  email: Yup.string().required("Kindly enter an email address").email("Email must be valid"),
});
const logInValidation = Yup.object().shape({
  email: Yup.string().required("Kindly enter an email address to login").email("Email must be valid"),
  password: Yup.string().required("Kindly enter your password"),
});
const chatValidation = Yup.object().shape({
  universe: Yup.string().required("Universe must have a name").min(4, "Must be at least 4 characters"),
  character: Yup.string().required("Character must have a name").min(4, "Must be at least 4 characters"),
});
export { initialValues, chatValidation, forgotValues, logInValidation, logInValues, forgotValidation };
