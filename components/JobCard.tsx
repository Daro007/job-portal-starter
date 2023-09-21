import React from "react";
import { Pacifico } from 'next/font/google'
import Image from 'next/image'
import db from "../db.json"

const pacifico = Pacifico({
    subsets: ['cyrillic'],
    display: 'swap',
    weight: "400"
})

type JobCardData = {
  "pagesInfo": PagesInfo ;
  "jobs": JobsData;  
}[];

type PagesInfo = {
  "totalJobs": number;
  "totalpages": number;
  "page": number;
  "perPage": number;
}[];

type JobsData = {
  "id": number;
  "company": string;
  "title": string;
  "salaryMin": string|null;
  "salaryMax": string|null;
  "salaryInfo": string|null;
  "salaryRange": string|null;
  "logo": string;
  "description": string;
  "location": string;
  "slug": string|null;
  "url": string;
  "source": string;
  "tags": string[];
  "date": string;
  "publicationDate": string;
}[];

async function JobCard() {
  let jobCardData: JobCardData | any
  let jobsData: JobsData

    // Mocked response with json-server for DEV enviroment
    if (process.env.NODE_ENV === "development") {
      // console.log("process.env.NODE_ENV", process.env.NODE_ENV)
      const response = await fetch('http://localhost:4000/rapidAPI');
      jobCardData = await response.json();
      // console.log("jobCardData", jobCardData.jobs[0])
      jobsData = jobCardData.jobs
      // console.log("jobsData", jobCardData.jobs[0])
    } else {
      jobsData = db.rapidAPI.jobs;
      // console.log("jobsData FROM DB directly", jobsData)
    }

  return (
    <div className="job-card">
      {jobsData.map(jobs =>
      <>
        <div className="job-card-img-container">
        <Image src={"https://remotive.com/job/1344657/logo"} alt="Comapany IMG" className="company-logo" fill={true}/>
        </div>

        <h3 className="role"> 
          <span className={pacifico.className}> 
            {jobs.title}
          </span>
        </h3>

        <p className="salary-range">
          🤑 Salary : {jobs.salaryRange?jobs.salaryRange:jobs.salaryInfo?jobs.salaryInfo:"Reserved"}
        </p>

        <p className="location">
          🏠{jobs.location}
        </p>

        <p className="source">
          👜{jobs.source}
        </p>

        <p className="tags">
          {jobs.tags[0]} · { jobs.tags[1]} · { jobs.tags[2]}
        </p>
      </>
      )
      }
    </div>
  );
}

export default JobCard;