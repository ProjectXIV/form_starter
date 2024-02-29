function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Username should be an email')
        .required('Field required'),
      password: Yup.string().required('Field required'),
    }),
    onSubmit: values => {
      alert('Login Successful');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="emailField"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div id="emailError">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="pswField"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div id="pswError">{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit" id="submitBtn">Submit</button>
    </form>
  );
}

export default App;