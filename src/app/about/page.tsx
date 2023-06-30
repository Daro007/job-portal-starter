import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <h1>About Your Job on IT</h1>

        <h2>Our Mission</h2>

        <p>At Your Job on IT, our mission is to revolutionize the IT job market by creating a seamless and efficient platform that reduces friction between recruiters and candidates. We are dedicated to providing a superior job search experience, empowering IT professionals to find their ideal roles and helping employers discover top talent with ease.</p>
        <br />
        <h2>Who We Are</h2>

        <p>We are a passionate team of professionals who understand the challenges faced by both recruiters and candidates in the IT industry. With our extensive experience in recruitment and technology, we have built a platform that focuses on transparency, clarity, and advanced filtering options to enhance the overall hiring process.</p>

        <br />
        <h2>What We Offer</h2>
        
        <h3>For Job Seekers:</h3>
        <br />
        <ul>
          <li>A user-friendly interface with advanced filtering options to quickly find relevant IT job opportunities</li>
          <li>Clear and detailed job descriptions, emphasizing key responsibilities and required skills, to ensure candidates have a comprehensive understanding of the role</li>
          <li>Enhanced visibility of company profiles, allowing candidates to gain insights into the organization´s culture, values, and mission</li>
          <li>Seamless application tracking and communication tools to keep candidates informed throughout the hiring process</li>
          <li>Access to valuable resources, such as career guides and industry insights, to support professional growth</li>
        </ul>
        <br />

        <h3>For Recruiters:</h3>
        <br />
        <ul>
          <li>A simplified job posting process, ensuring clear and comprehensive job listings that attract the right candidates</li>
          <li>Advanced filtering options to target specific skill sets, experience levels, and other relevant criteria, enabling recruiters to reach their desired talent pool effectively</li>
          <li>Powerful applicant tracking features, allowing recruiters to manage and evaluate candidate applications efficiently</li>
          <li>Tools to showcase company culture, values, and benefits, helping recruiters attract candidates who align with their organization</li>
          <li>Dedicated customer support, providing guidance and assistance throughout the hiring process</li>
        </ul>
      </div>
    </main>
  )
}
