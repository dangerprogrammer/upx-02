'use client';

import { redirect } from "next/navigation";
import { ContextApp } from "@/components/context/ContextApp";
import { useContext, useEffect } from "react";

function Home() {
  const { login, setLogin } = useContext(ContextApp);

  useEffect(() => {
    const userData = localStorage.getItem('user-data');

    if (!login) {
      if (userData) setLogin(JSON.parse(userData));
      else return redirect('/login');
    };
  }, []);

  if (!login) return redirect('/login');
  
  const { given_name } = login;

  return <div>Opa, eae {given_name}!</div>
};

export default Home;