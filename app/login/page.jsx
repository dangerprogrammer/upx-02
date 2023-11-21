'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import initializeLogin from "@/scripts/initializeLogin";
import LoginContainer from "@/components/login/Login";

function LoginPage() {
    const { login, setLogin } = useContext(ContextApp);

    if (login) return redirect('/');

    useEffect(() => {
        const userData = localStorage.getItem('user-data');
        if (userData) {
            setLogin(JSON.parse(userData));
            return redirect('/');
        };

        initializeLogin(setLogin);
    }, []);

    return <LoginContainer {...{setLogin}}>
        <div id="login-button"></div>
    </LoginContainer>
};

export default LoginPage;