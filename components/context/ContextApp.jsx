'use client';

import { useState, createContext } from 'react';
import systemCategories from './systemCategories';

const ContextApp = createContext();

function ContextProvider({ children }) {
    const [ login, setLogin ] = useState(!1),
        [ userCategories, setUserCategories ] = useState([]),
        [ showSidebar, setShowSidebar ] = useState(!0),
        [ laterFunctions, setLaterFunctions ] = useState([]),
        values = {
            login, setLogin,
            userCategories, setUserCategories,
            systemCategories,
            showSidebar, setShowSidebar,
            laterFunctions, setLaterFunctions
        };

    return <ContextApp.Provider value={values}>
        {children}
    </ContextApp.Provider>
};

export {ContextApp};

export default ContextProvider;