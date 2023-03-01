import React, { useEffect } from 'react'
import CreateForm from '../components/createForm'
import Item from '../components/item'
import ItemsContainer from '../components/itemsContainer'
import MainContainer from '../components/mainContainer'
import useReducerApp from '../store/store'

const Create = () => {
    const [state, dispatch] = useReducerApp();

    useEffect(() => {
        dispatch({ type: 'LOAD' });
    }, [dispatch]);

    return (
        <MainContainer>
            <CreateForm dispatch={dispatch} />

            <ItemsContainer>
                {state?.items?.length > 0 && state.items.map((item, index) => <Item item={item} key={index} />)}
            </ItemsContainer>
        </MainContainer>
    )
}

export default Create