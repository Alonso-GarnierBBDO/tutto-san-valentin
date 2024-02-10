'use client'

import { useEffect } from "react";

export default function NotFound() {


  useEffect( () => {
    window.location.href = '/';
  }, []);


    return (
      <div className="global">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    );
}