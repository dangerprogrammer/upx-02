'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { useContext, useEffect } from "react";
import Home from "@/components/home/Home";
import onLoadedPage from "@/scripts/onLoadedPage";

function HomePage() {
  const { login, setLogin, setUserCategories, laterFunctions, ...contexts } = useContext(ContextApp);

  useEffect(() => onLoadedPage({ login, setLogin, setUserCategories, laterFunctions }), []);

  const testLogin = { given_name: 'Patrick', name: 'Patrick Vieira Léo', email: 'papatrileo@gmail.com' };

  // return <Home { ...testLogin }/>
  return <Home { ...login } setUserCategories={setUserCategories} { ...contexts }/>
};

export default HomePage;