'use client';

import { useState, createContext, useEffect } from 'react';

const ContextApp = createContext();

function ContextProvider({ children }) {
    const [ login, setLogin ] = useState(JSON.parse(localStorage.getItem('user-data'))),
        [ userCategories, setUserCategories ] = useState([]),
        systemCategories = [
            { name: 'Celulares estragados', imagePath: '/img1.png', id: 'damaged-phones' }
        ],
        values = { login, setLogin, userCategories, setUserCategories, systemCategories };

    return <ContextApp.Provider value={values}>
        {children}
    </ContextApp.Provider>
};

export {ContextApp};

export default ContextProvider;