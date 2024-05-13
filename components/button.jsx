"use client";
import React from "react";
import Link from "next/link";



function ButtonWithConsoleLog({ userId }) {

  return (
    <button
      onClick={async () => {
        console.log("aaaaa");

      }}
    >
      <Link href={`/users/${userId}`}>Visitar Perfil</Link>
    </button>
  );
}

export default ButtonWithConsoleLog;
