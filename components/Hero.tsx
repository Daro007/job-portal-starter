import React from "react";
import { Pacifico } from 'next/font/google'
 
const pacifico = Pacifico({
    subsets: ['cyrillic'],
    display: 'swap',
    weight: "400"
})
 
function Hero() {
  return (
    <div className="header">
      <h1 className="title"><span className={pacifico.className}>Your job on IT </span></h1>
      <p className="subtitle">
        Find the best offers in the Tech industry
      </p>
    </div>
  );
}

export default Hero;
