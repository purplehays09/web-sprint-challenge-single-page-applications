import * as yup from 'yup'

const formSchema = yup.object().shape({    
  name: yup
    .string()
    .min(2,'must be at least 2 characters')
    .required('Must include email address'),
  size: yup
    .string()
    .oneOf(['Small','Medium','Large'],'Please Select a Size')
    .required('Please Select a Size'),
  sauce: yup
    .string()
    .oneOf(['Marinara','Pesto','Garlic'],'Please Select a Sauce')
    .required('Please Select a Sauce'),
  toppings: yup
    .array()
    .optional(),
  instructions: yup
    .string()
    .optional(),
})

export default formSchema