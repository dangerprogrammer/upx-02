import { ContextApp } from "@/components/context/ContextApp";
import { redirect } from "next/navigation";
import { useContext } from "react";


function LoginPage() {
    const { login, setLogin } = useContext(ContextApp);

    if (login) return redirect('/');

    return <div>Opa</div>
};

export default LoginPage;