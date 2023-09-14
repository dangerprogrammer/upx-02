'use client';

import { redirect } from "next/navigation";
import { ContextApp } from "@/components/context/ContextApp";
import { useContext, useEffect } from "react";
import Home from "@/components/home/Home";
import onLoadedPage from "@/scripts/onLoadedPage";
onLoadedPage
function HomePage() {
  const { login, setLogin, userCategories, setUserCategories } = useContext(ContextApp);

  useEffect(() => onLoadedPage({ login, setLogin, userCategories, setUserCategories }), []);

  const testLogin = { given_name: 'Patrick', name: 'Patrick Vieira Léo', email: 'papatrileo@gmail.com' };

  // return <Home { ...testLogin }/>
  return <Home { ...login } userCategories={userCategories} setUserCategories={setUserCategories}/>
};

export default HomePage;