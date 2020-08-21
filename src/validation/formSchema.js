import * as yup from 'yup'

const formSchema = yup.object().shape({    
  name: yup
    .string()
    .min(2,'must be at least 2 characters')
    .required('Must include email address'),
  size: yup
    .string()
    .oneOf(['small','medium','large'],'Please Select a Size')
    .required('Please Select a Size'),
  sauce: yup
    .string()
    .oneOf(['marinara','pesto','garlic'],'Please Select a Sauce')
    .required('Please Select a Sauce'),
  toppings: yup
    .array()
    .max(3,"You can only select 3 toppings")
    .optional('optional'),
  instructions: yup
    .string()
    .max(100, 'You can only use 100 characters'),
})

export default formSchema