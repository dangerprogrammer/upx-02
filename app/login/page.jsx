'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import initializeLogin from "@/scripts/initializeLogin";
import LoginContainer from "@/components/login/Login";


function LoginPage() {
    const { login, setLogin } = useContext(ContextApp);

    if (login) return redirect('/');

    useEffect(() => initializeLogin(setLogin), []);

    return <LoginContainer>
        <div id="login-button"></div>
    </LoginContainer>
};

export default LoginPage;