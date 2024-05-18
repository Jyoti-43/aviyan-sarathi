import { useField } from 'formik'
import React from 'react'


const TextField = (props) => {
    const [field , meta] = useField(props.name);
    console.log(props)
  return (
    <div>
        <input type="text" {...field} {...props}/>
        {meta.error}
        <br/>
    </div>
  )
}

export default TextField