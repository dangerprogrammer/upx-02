'use client';

import { useState, createContext } from 'react';
import systemCategories from './systemCategories';
import productsList from './productsList';


const ContextApp = createContext();

function ContextProvider({ children }) {
    const [ login, setLogin ] = useState(!1),
        [ userCategories, setUserCategories ] = useState([]),
        [ userCart, setUserCart ] = useState([]),
        values = {
            login, setLogin,
            userCategories, setUserCategories,
            systemCategories,
            productsList
        },
        { Provider } = ContextApp;

    return <Provider value={values}>
        {children}
    </Provider>
};

export {ContextApp};

export default ContextProvider;