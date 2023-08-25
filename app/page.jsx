'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { useRouter } from "next/navigation";
import { useContext } from "react";


function Home() {
  const { login } = useContext(ContextApp), { replace } = useRouter();

  replace('/login');

  return <div>Opa</div>
};

export default Home;