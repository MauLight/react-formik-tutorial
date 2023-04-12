import React from "react";
import { useFormik } from "formik";
import './styles.css';

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Field required";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Must be 15 characters or less";
  }
  if (!values.lastname) {
    errors.lastname = 'Field required';
  } else if (values.lastname.length > 20) {
    errors.lastname = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = 'Field required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;

}

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { firstname: '', lastname: '', email: '' },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstname"
        name="firstname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
      />

      {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />

      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};



function App() {
  return (
    <SignupForm />
  );
};

export default App;