import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, Route, Switch } from 'react-router-dom'
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
    instructions:''
}

export default function PizzaForm() {
    const [formValues, setFormValues] = useState(initialFormValues)

    const inputChange = (evt) =>{
        const {name,value} = evt
        setFormValues({
            ...formValues,
            [name]: value 
          })
    }

    const checkboxChange = (evt) => {
        const {name, isChecked} = evt

        setFormValues({
          ...formValues,
          toppings: {
            ...formValues.toppings,
            [name]: isChecked,
          }
        })
      }

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

             <form>
                <h3>Build Your Own Pizza</h3>
                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>Choice of Size</h4>
                        <h5>Required</h5>
                    </div>
                    <div className='form'>
                        <select 
                        name='size' 
                        id='size'
                        onChange={inputChange}
                        value={formValues.size}
                        
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
                        name='sauce' 
                        id='sauce' 
                        type='radio'
                        value='marinara'
                        />
                        <label for='marinara'>Marinara</label>
                        
                        <input 
                        name='sauce' 
                        id='sauce' 
                        type='radio'
                        value='pesto'
                        />
                        <label for='pesto'>Pesto</label>

                        <input 
                        name='sauce' 
                        id='sauce' 
                        type='radio'
                        value='garlic'
                        />
                        <label for='garlic'>Garlic</label>
                    </div>      

                    
                </div>

                <div className='formSection'>
                    <div className='formTitle'>
                        <h4>Add Toppings</h4>
                        <h5>Choose up to 3</h5>
                    </div>
                    <div className='form'>
                         <input 
                            name='pepperoni' 
                            id='pepperoni' 
                            type='checkbox'
                            value='pepperoni'
                            />
                            <label for='pepperoni'>Pepperoni</label>

                            <input 
                            name='sausage' 
                            id='sausage' 
                            type='checkbox'
                            value='sausage'
                            />
                            <label for='sausage'>Sausage</label>

                            <input 
                            name='tomatoes' 
                            id='tomatoes' 
                            type='checkbox'
                            value='tomatoes'
                            />
                            <label for='tomatoes'>Tomatoes</label>    

                            <input 
                            name='anchovies' 
                            id='anchovies' 
                            type='checkbox'
                            value='anchovies'
                            />
                            <label for='anchovies'>Anchovies</label>

                            <input 
                            name='olives' 
                            id='olives' 
                            type='checkbox'
                            value='olives'
                            />
                            <label for='olives'>Olives</label>

                            <input 
                            name='pineapple' 
                            id='pineapple' 
                            type='checkbox'
                            value='pineapple'
                            />
                            <label for='pineapple'>Pineapple</label>      
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
                        name='instructions' 
                        id='instructions' 
                        type='text'
                        maxLength='100'
                        value='CHANGE TO STATE'
                        placeholder='Any Special Instructions?'
                        />
  
                    </div> 
                    
                    
                </div>

             </form>
        </div>
    )
}

