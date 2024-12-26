import {useState} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import data from '../../shared/data/index'
import TextField from '../sign-up/components/TextField';


const Login = ({setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const LoginSchema = Yup.object().shape({
    email: Yup.string()
              .email('Invalid email address format')
              .required('Email is required'),
    password: Yup.string()
                 .min(3, 'Password must be 3 characters at minimum')
                 .required('Password is required')
  });

  return (<div className="container mx-auto p-8">
    <div className="max-w-lg mx-auto">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, {setSubmitting}) => {
          const user = data.users.find((u) => u.email === values.email && u.password === values.password);
          if (user) {
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate(user.role === data.roles.admin ? '/admin' : '/');
          } else {
            alert('invalid email or password');
          }
          setSubmitting(false);
        }}
      >
        {(props) => (<div>
          <div className="mb-6 text-center">
            {!props.isSubmitting ? (<div>
              <h1 className="text-3xl font-semibold text-gray-700 mb-7">
                Login Page
              </h1>
              <Form>


                <TextField
                  type="email"
                  label="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="********"
                />

                <button
                  type="submit"
                  className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            </div>) : (<>..loading</>)}
          </div>
        </div>)}
      </Formik>
    </div>
  </div>);
};

export default Login;
