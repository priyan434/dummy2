import {ErrorMessage, Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import TextField from './components/TextField';




const Signup = ({}) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const handleSubmit=()=>{

  }


  const validationSchema = Yup.object({
    name: Yup.string().required('name Required!'),
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
                 .min(4, 'Password must be minimum 4 digits!')
                 .required('Password Required!'),
    confirmPassword: Yup.string()
                        .oneOf([
                          Yup.ref('password'),
                          null
                        ], 'Password must match!')
                        .required('Confirm password is required!')
  });

  return (
    <div className="flex justify-center items-center w-full mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <div className="border border-gray-200 w-96">
            <h1 className="text-center text-2xl font-bold mx-auto">Signup</h1>
            <Form className="form p-3 mb-4">


              <TextField
                type="text"
                label="name"
                name="name"
                placeholder="john"
              />

              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="john.doe@example.com"
              />

              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="********"
              />

              <div className="mb-2 flex flex-col gap-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  className={`w-full px-4 py-2 border-2 rounded-md shadow-sm ${formik.touched.confirmPassword && formik.errors.confirmPassword ?
                    'border-red-500' :
                    'border-gray-300'} focus:outline-none`}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </div>)}
              </div>

              <button
                className="btn  m-3 border-3 border-gray-50 rounded bg-blue-700 text-white p-2"
                type="submit"
              >
                Register
              </button>
              <button
                className="btn btn-primary border p-2 rounded border-gray-700 m-3"
                type="reset"
              >
                Reset
              </button>
            </Form>
          </div>)}
      </Formik>
    </div>);
};

export default Signup;
