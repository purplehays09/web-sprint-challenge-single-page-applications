import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, Route, Switch } from 'react-router-dom'
import formSchema from './validation/formSchema'
import './App.css';
import * as yup from 'yup'

const initialFormValues = {
    size:'',
    sauce:'',
    toppings:{
        pepperoni:false,
        sausage:false,
        tomatoes:false,
        anchovies:false,
        olives:false,
        pineapple:false,
    },
    instructions:'',
    name:''
}

const initialFormErrors = {
    name: '',
  }

const initialDisabled = true


export default function PizzaForm() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors) 
    const [disabled, setDisabled] = useState(initialDisabled)  

    


    const postOrder = newOrder => {

        axios.post('https://reqres.in/api/users', newOrder)
          .then(res => {
            console.log(newOrder)
        })
          .catch(err => {
            debugger
          })
          .finally(() => {
            setFormValues(initialFormValues)
          })
      }

      const onSubmit = (evt) =>{
          evt.preventDefault()
          submit()
      }

      const submit = () => {
        const newOrder = {
          size: formValues.size.trim(),
          sauce: formValues.sauce.trim(),
          instructions: formValues.instructions.trim(),
          toppings: Object.keys(formValues.toppings).filter(t => formValues.toppings[t]),
        }
        postOrder(newOrder)
      }

    const inputChange = (evt) =>{
        const {name,value} = evt.target

        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: ""
          });
        })

        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          });
      });
        setFormValues({
            ...formValues,
            [name]: value 
          })
    }

    const checkboxChange = (evt) => {
        const {name} = evt.target

        setFormValues({
          ...formValues,
          toppings: {
            ...formValues.toppings,
            [name]: !formValues.toppings[name],
          }
        })
      }

      useEffect(() => {
        formSchema.isValid(formValues)
          .then(valid => {
            // setDisabled(!valid)
            console.log('Looks Good')
          })
      }, [formValues])

    return(
        <div>
             <header>

                <nav>
                    <h3>
                        LAMBDA EATS
                    </h3>
                    <div>
                        <a href='/'>Home</a>
                        <a href='/'>Help</a>
                    </div>
                </nav>
                <div className='headerImg'>

                </div>
             </header>

             <form onSubmit={onSubmit}>
                <h3>Build Your Own Pizza</h3>
                <div className='errors'>
                {/* RENDER THE VALIDATION ERRORS HERE */}
                <div>{formErrors.name}</div>
                </div>
                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>Choice of Size</h4>
                        <h5>Required</h5>
                    </div>
                    <div className='form'>
                        <select 
                        onChange={inputChange}
                        value={formValues.size}
                        name='size' 
                        id='size'
                        
                        >
                            <option value=''>Select</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </div>                    
                </div>
                
                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>Choice of Sauce</h4>
                        <h5>Required</h5>
                    </div>
                    <div className='form'>
                        <input 
                        onChange={inputChange}
                        name='sauce' 
                        id='sauce' 
                        type='radio'
                        value='marinara'
                        />
                        <label htmlFor='marinara'>Marinara</label>
                        
                        <input 
                        onChange={inputChange}
                        name='sauce' 
                        id='sauce' 
                        type='radio'
                        value='pesto'
                        />
                        <label htmlFor='pesto'>Pesto</label>

                        <input 
                        onChange={inputChange}
                        name='sauce' 
                        id='sauce' 
                        type='radio'
                        value='garlic'
                        />
                        <label htmlFor='garlic'>Garlic</label>
                    </div>      

                    
                </div>

                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>Add Toppings</h4>
                        <h5>Choose up to 3</h5>
                    </div>
                    <div className='form'>
                         <input 
                            onChange={checkboxChange}
                            name='pepperoni' 
                            id='pepperoni' 
                            type='checkbox'
                            value='true'
                            />
                            <label htmlFor='pepperoni'>Pepperoni</label>

                            <input 
                            onChange={checkboxChange}
                            name='sausage' 
                            id='sausage' 
                            type='checkbox'
                            value='sausage'
                            />
                            <label htmlFor='sausage'>Sausage</label>

                            <input 
                            onChange={checkboxChange}
                            name='tomatoes' 
                            id='tomatoes' 
                            type='checkbox'
                            value='tomatoes'
                            />
                            <label htmlFor='tomatoes'>Tomatoes</label>    

                            <input 
                            onChange={checkboxChange}
                            name='anchovies' 
                            id='anchovies' 
                            type='checkbox'
                            value='anchovies'
                            />
                            <label htmlFor='anchovies'>Anchovies</label>

                            <input 
                            onChange={checkboxChange}
                            name='olives' 
                            id='olives' 
                            type='checkbox'
                            value='olives'
                            />
                            <label htmlFor='olives'>Olives</label>

                            <input 
                            onChange={checkboxChange}
                            name='pineapple' 
                            id='pineapple' 
                            type='checkbox'
                            value='pineapple'
                            />
                            <label htmlFor='pineapple'>Pineapple</label>      
                    </div> 
                                                         

                </div>
{/* 
                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>Choice of Substitute</h4>
                        <h5>Choose up to 1</h5>
                    </div>
                    <div className='form'>
                        <select name='size' id='size'>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </div> 
                    <input name='substitute' id='substitute'>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </input>
                    
                </div> */}

                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>Special Instructions</h4>
                        {/* <h5>Choose up to 1</h5> */}
                    </div>
                    <div className='form'>
                        <input 
                        onChange={inputChange}
                        name='instructions' 
                        id='instructions' 
                        type='text'
                        maxLength='100'
                        value={formValues.instructions}
                        placeholder='Any Special Instructions?'
                        />
  
                    </div> 
                    
                    
                </div>

                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>What is the Name htmlFor the order?</h4>
                    </div>
                    <div className='form'>
                        <input 
                        onChange={inputChange}
                        name='name' 
                        id='name' 
                        type='text'
                        maxLength='20'
                        value={formValues.name}
                        placeholder='Enter Name'
                        />
  
                    </div> 
                    
                    
                </div>

                <div className='formSubmit'>
                    <input 
                    onClick={submit} 
                    type='submit' 
                    id='submit'
                    value="Place Order"
                    // disabled={disabled}
                    />
                </div>

             </form>
        </div>
    )
}

