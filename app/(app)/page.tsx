'use client'

import { useEffect } from "react";

export default function Home() {

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }else{
      window.location.href = "/dashboard";
    }
  },[])

  return (
    <div>
      
    </div>
  );
}
