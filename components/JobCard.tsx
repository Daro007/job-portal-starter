import React from "react";
import { Pacifico } from 'next/font/google'
import Image from 'next/image'
 
const pacifico = Pacifico({
    subsets: ['cyrillic'],
    display: 'swap',
    weight: "400"
})
 
function JobCard() {
  return (
    <div className="job-card">
      <div className="job-card-img-container">
        <Image src="https://remotive.com/job/1344657/logo" alt="Comapany IMG" className="company-logo" fill={true}/>
      </div>
      <h3 className="role"> <span className={pacifico.className}> Full Stack dev </span></h3>
      <p className="salary-range">
        30 to 60k
      </p>
      <p className="location">
        Fully Remote
      </p>
      <p className="company-name">
        Company LTD
      </p>
    </div>
  );
}

export default JobCard;