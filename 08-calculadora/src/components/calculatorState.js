import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext({
    /* state */
    memory: null,
    operation: null,
    currentValue: 0,
    isDecimal: false,
    /* methods */
    addNumber: value => { },
    addOperation: operation => { },
    getResult: () => { },
    executeAction: action => { }
});

const CalculatorState = ({ children }) => {
    const [memory, setMemory] = useState(null);
    const [operation, setOperation] = useState(null);
    const [currentValue, setCurrentValue] = useState(0);
    const [isReset, setIsReset] = useState(true);
    const [isDecimal, setIsDecimal] = useState(false);

    const handleAddNumber = value => {
        if (isReset) {
            if (value === '.') {
                setIsDecimal(true);
            } else {
                const point = isDecimal ? '.' : '';
                const newValue = currentValue.toString() + point + value.toString();
                setCurrentValue(parseFloat(newValue));
                setIsReset(false);
                setIsDecimal(false);
            }
        } else {
            if (value === '.') {
                setIsDecimal(true);
            } else {
                const point = isDecimal ? '.' : '';
                const newValue = parseFloat(currentValue.toString() + point + value.toString());
                console.log({ newValue });
                setIsDecimal(false);
                setCurrentValue(newValue);
            }
        }
    }
    const handleAddOperation = op => {
        if (currentValue) {
            if (operation) {
                handleGetResult();
                setOperation(op);
            } else {
                setOperation(op);
                setMemory(currentValue);
                setCurrentValue(0);
                setIsReset(true);
            }
        }
    }
    const handleGetResult = () => {
        let result = 0;
        if (currentValue && operation && memory) {
            switch (operation) {
                case '+':
                    result = parseFloat(currentValue) + parseFloat(memory);
                    break;
                case '-':
                    result = parseFloat(memory) - parseFloat(currentValue);
                    break;
                case '*':
                    result = parseFloat(currentValue) * parseFloat(memory);
                    break;
                case '/':
                    result = parseFloat(memory) / parseFloat(currentValue);
                    break;
                case '%':
                    result = (parseFloat(memory) / 100) * parseFloat(currentValue);
                    break;
                default:
            }

            setCurrentValue(result);
            setOperation(null);
            setMemory(result);
            setIsReset(true);
            setIsDecimal(false);
        }
    }
    const clean = () => {
        setCurrentValue(0);
        setOperation(null);
        setMemory(0);
        setIsReset(true);
        setIsDecimal(false);
    }
    const deleteNumber = () => {
        // if (currentValue.toString().length > 0 && currentValue !== 0 && currentValue[0] !== '-') {
        //     const arr = currentValue.toString().split('');
        //     arr.pop();
        //     if (arr.length === 0) {
        //         setCurrentValue(0);
        //     } else {
        //         setCurrentValue(parseFloat(arr.join('')))
        //     }
        // }
        const index = currentValue.toString().indexOf('.');
        if (index > 0) {
            const numberOfDecimals = currentValue.toString().slice(index + 1).length;
            if (numberOfDecimals === 1) {
                const min = Math.floor(currentValue);
                setCurrentValue(min);
            } else {
                const newNumber = parseFloat(currentValue).toFixed(numberOfDecimals - 1);
                setCurrentValue(newNumber)
            }
        } else {
            setCurrentValue(parseInt(currentValue / 10));
        }
    };
    const changeSign = () => setCurrentValue(currentValue * -1);
    const convertToFloat = () => {
        if (currentValue.toString().indexOf('.') > 0) {
            console.log('Identifica decimal');
        } else {
            handleAddNumber('.')
        }
    }
    const handleExecuteAction = action => {
        switch (action) {
            case '=':
                handleGetResult();
                break;
            case 'AC':
                clean();
                break;
            case '←-':
                deleteNumber();
                break;
            case '+/-':
                changeSign();
                break;
            case '.':
                convertToFloat();
                break;
            default:
        }
    }

    return (
        <AppContext.Provider value={{ memory, operation, currentValue, isDecimal, addNumber: handleAddNumber, addOperation: handleAddOperation, getResult: handleGetResult, executeAction: handleExecuteAction }}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}

export default CalculatorState