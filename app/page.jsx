'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { useContext, useEffect } from "react";
import Home from "@/components/home/Home";
import onLoadedPage from "@/scripts/onLoadedPage";

function HomePage() {
  const { login, setLogin, setUserCategories, ...contexts } = useContext(ContextApp);

  useEffect(() => onLoadedPage({ login, setLogin, setUserCategories }), []);

  return <Home { ...login } setUserCategories={setUserCategories} { ...contexts }/>
};

export default HomePage;