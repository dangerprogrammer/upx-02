'use client';

import { redirect } from "next/navigation";
import { ContextApp } from "@/components/context/ContextApp";
import { useContext } from "react";


function Home() {
  const { login } = useContext(ContextApp);

  if (!login) return redirect('/login');

  return <div>Opa</div>
};

export default Home;