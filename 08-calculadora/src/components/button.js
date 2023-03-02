import React from 'react'
import { useAppContext } from './calculatorState'

const Button = ({ type, value }) => {
    const { addNumber, addOperation, executeAction } = useAppContext();

    const handleClick = e => {
        switch (type) {
            case 'number':
                addNumber(parseFloat(value));
                break;
            case 'operator':
                addOperation(value);
                break;
            case 'action':
                executeAction(value);
                break;
            default:
        }
    }

    return <button className='calculatorButton' onClick={handleClick}>{value}</button>
}

export default Button