import React from 'react'
import { useAppContext } from './calculatorState'

const CalculatorScreen = () => {
    const { memory, operation, currentValue, isDecimal } = useAppContext();
    return (
        <div className='calculatorScreen'>
            <div>
                <span>Memory: {memory}</span>
                <span>Operation: {operation}</span>
                <span>Decimal: {isDecimal ? 'decimal' : 'entero'}</span>
            </div>
            <div className='calculatorCurrentValue'>{currentValue}{isDecimal ? '.' : ''}</div>
        </div>
    )
}

export default CalculatorScreen