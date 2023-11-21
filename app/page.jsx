'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { useContext, useEffect } from "react";
import Home from "@/pages/home/Home";
import onLoadedPage from "@/scripts/onLoadedPage";

function HomePage() {
  const { ...contexts } = useContext(ContextApp);

  useEffect(() => onLoadedPage({ ...contexts }), []);

  return <Home { ...contexts }/>
};

export default HomePage;