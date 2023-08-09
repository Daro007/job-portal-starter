import styles from './page.module.css'
import JobCard from '../../../components/JobCard'

export default function Jobs() {
  return (
    <main className={styles.main}>
      <div className={styles.jobsContainer}>
        <h1> Jobs</h1>
        {/* TODO: style the UI */}
        <JobCard />
        {/* TODO: create mock data for jobs in db.json based on any API for Jobs */}
        {/* TODO: loop over Jobs array */}
        {/* TODO: create a Job component */}
      </div>
    </main>
  )
}
