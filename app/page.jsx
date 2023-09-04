'use client';

import { redirect } from "next/navigation";
import { ContextApp } from "@/components/context/ContextApp";
import { useContext, useEffect } from "react";
import Home from "@/components/home/Home";

function HomePage() {
  const { login, setLogin } = useContext(ContextApp);

  useEffect(() => {
    const userData = localStorage.getItem('user-data');

    if (!login) {
      if (userData) setLogin(JSON.parse(userData));
      else return redirect('/login');
    };
  }, []);

  const testLogin = { given_name: 'Patrick', name: 'Patrick Vieira Léo', email: 'papatrileo@gmail.com' };

  return <Home { ...testLogin }/>
  // return <Home { ...login }/>
};

export default HomePage;