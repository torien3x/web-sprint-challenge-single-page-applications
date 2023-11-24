import React, { useEffect, useState } from 'react' 
import "../styles/Form.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Form() {
    const navigate = useNavigate();
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [selectedSauce, setSelectedSauce] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOtherOptions, setSelectedOtherOptions] = useState('');
    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState('17.99');
    const [customerName, setCustomerName] = useState('');

    const [chosenPizza, setChosenPizza] = useState([]);
  
    const handleSelectSauce = (event) => {
      setSelectedSauce(event.target.value);
    };
    
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleToppingChange = (event) => {

      const topping = event.target.value;
      
      setSelectedToppings((prevToppings) =>
        prevToppings.includes(topping)
          ? prevToppings.filter((selected) => selected !== topping)
          : selectedToppings.length < 10 ? [...prevToppings, topping] : prevToppings
      );

    };

    const handleSelectOtherOptionsChange = (option) => {
      // If a different option is selected or no option was previously selected
      if (option.price !== otherOptions.find((o) => o.name === selectedOtherOptions)?.price) {
        setPrice((prevPrice) => parseFloat(prevPrice) + parseFloat(option.price));
      }
  
      setSelectedOtherOptions(option.name);
    };

    const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setCustomerName(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault();
    let selectedPizza = {
        name: customerName,
        size: selectedOption,
        sauce: selectedSauce,
        toppings: selectedToppings,
        sub: selectedOtherOptions,
        instructions: inputValue,
    }

    axios
    .post('https://reqres.in/api/orders', selectedPizza)
    .then(() => console.log('success'))
    .catch((error) => console.log(error))

    setChosenPizza(prevPizza => [...prevPizza, selectedPizza])

    navigate('/pizza/confirm', {
    state: { pizza: selectedPizza}
    })
}
console.log(chosenPizza)

  useEffect(() => {
    if (selectedToppings.length === 10) {
        setError(true) 
    } else {
        setError(false)
    }
  }, [selectedToppings]) 

 






    const pizzaToppings = [
        'Pepperoni',
        'Mushrooms',
        'Onions',
        'Sausage',
        'Green Peppers',
        'Black Olives',
        'Green Olives',
        'Bacon',
        'Tomatoes',
        'Spinach',
        'Artichokes',
        'Pineapple',
        'Ham',
        'Jalapeños',
        'Extra Cheese',
      ];
    
      const pizzaSauces = [
        'Tomato Sauce',
        'Pesto',
        'Alfredo Sauce',
        'BBQ Sauce',
        'Buffalo Sauce',
        'Garlic Butter',
        'White Sauce',
        'Truffle Oil',
        'Hummus',
        'Sriracha',
      ];
    
      const otherOptions = [
        { name: 'Gluten free Crust', price: 1.00 },
        { name: 'Cauliflower Crust', price: 1.00 },
        { name: 'Wheat Crust', price: 2.00 }
      ];
    


  return (
<form className='form-container' id='pizza-form' onSubmit={submitHandle}>
        <img className='top-form-img' src='https://www.foodandwine.com/thmb/Z6diauxVQGwOT95IBswHq12YyC8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/guide-to-homemade-pizza-FT-MAG0322-5269d2b72b9b4d69aa3634c5d182b11b.jpg'/>
        <div className='name-container'>
          {customerName.length <2 ? <p>name must be at least 2 characters</p> : null }
        <div>Name</div>
            <input 
            type="text"
            name='customer-name-input'
            id="name-input"
            value={customerName}
            onChange={handleNameChange}
            />   
        </div>
    <div className='top-content-form'>
        <h2>Build Your Own Pizza</h2>
    <div>
        <div className='inside-top-content-form'>
        <h3>Choice of Size</h3>
        <p>Required</p> 
        </div>
        <div>
          <select id="size-dropdown" value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select...</option>
            <option value="mini">Mini</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra large">Extra Large</option>
          </select>
        </div>
    </div>
        <div className='sauce-content-form'>
        <h3>Choice of Sauce</h3>
        <p>Required</p>
        </div> 
        <div className='sauce-content'>
            {pizzaSauces.map((sauce, i) => {
                return(
                    <label key={i}>
                        <input id='name-input' onChange={handleSelectSauce} value={sauce} type='radio'
                        checked={selectedSauce === sauce}/>
                        {sauce}
                    </label>
                )
            })}
        </div>
        <div>
            <div className='toppings-content-form'>
            <h3>Add Toppings</h3>
            <p>Choose up to 10</p>
            {error ? <p>Limit reached</p> : null}
            </div>
            <div className='toppings-content'>
                {pizzaToppings.map((toppings, i) => {
                    return(
                        <label key={i}>
                        <input id='pizza-toppings'
                          type="checkbox"
                          value={toppings}
                          checked={selectedToppings.includes(toppings)}
                          onChange={handleToppingChange}
                        /> 
                        {toppings}
                        </label>
                    )
                })}
            </div>
            <div>
                <div className='substitution-content-form'>
                <h3>Choice of Substitution</h3>
                <p>Choose up to 1</p>
                </div>
                <div className='substitution-form'>
                {otherOptions.map((options, i) => {
                    return(
                        <label key={i}>
                        <input id='substitution-check'
                          type="checkbox"
                          value={options}
                          checked={selectedOtherOptions === options.name}
                          onChange={() => handleSelectOtherOptionsChange(options)}
                        /> 
                        {options.name}(${options.price})
                        </label>
                    )
                })} 
                </div>
                <div>
                    <div className='instruction-content'>
                    <h3>Special Instructions</h3>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="special-text"
                            value={inputValue}
                            onChange={handleInputChange}
                        />   
                    </div>
                    <div className='bottom-content-form'>
                        <input
                            type="number"
                            id='quantityBox'
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            max="5"
                        />

                        {/* 
                        if size is empty.if sauce is not selected, if add toppings not selected then true else false 
                        */}
                        <button type='submit' id='pizza-form-btn' disabled={ selectedOption === '' || selectedSauce === '' || selectedToppings.length === 0 ? true : false}>Add to Order ${price}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
  )

  }


  
    
  
  
  