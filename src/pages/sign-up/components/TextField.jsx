import {ErrorMessage, useField} from 'formik';


const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (<div className="mb-2 flex flex-col gap-2">
    {label && <label htmlFor={field.name}>{label}</label>}
    <input
      className={`w-full px-4 py-2 border-2 rounded-md shadow-sm ${meta.touched && meta.error ?
        'border-red-500' :
        'border-gray-300'} focus:outline-none `}
      {...field} {...props}
      autoComplete="off"
    />
    <ErrorMessage component="div" name={field.name} className="error"/>
  </div>)
}
export default TextField
