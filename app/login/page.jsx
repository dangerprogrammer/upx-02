'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import initializeLogin from "@/scripts/initializeLogin";


function LoginPage() {
    const { login, setLogin } = useContext(ContextApp);

    if (login) return redirect('/');

    useEffect(() => {

        initializeLogin(setLogin);
    }, []);

    return <div id="login-button"></div>
};

export default LoginPage;