'use client';

import { useState, createContext } from 'react';
import systemCategories from './systemCategories';

const ContextApp = createContext();

function ContextProvider({ children }) {
    const [ login, setLogin ] = useState(!1),
        [ userCategories, setUserCategories ] = useState([]),
        values = {
            login, setLogin,
            userCategories, setUserCategories,
            systemCategories
        },
        { Provider } = ContextApp;

    return <Provider value={values}>
        {children}
    </Provider>
};

export {ContextApp};

export default ContextProvider;