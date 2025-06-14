import { Grid } from "@mui/material";

import styles from './Experience.module.css'

export default function Experience() {
  return (
    <div>
      <Grid container spacing={2} sx={{padding: '20px'}}>
        <Grid size={6}>
          <h1>Work Experience</h1>
          <div className={styles['experience-block']}>
            <h3>Luxoft</h3>
            <p>Developed SPA applications using Angular framework, TypeScript, and NgRx for effective data management and state management.</p>
            <p>Led an automation team, successfully implementing robust test coverage across multiple projects.</p>
            <p>Leveraged expertise in transitioning a project from TestCafe (TypeScript) to Selenium (Java), optimizing test coverage and aligning more closely with client requirements.</p>
            <p>Excelled in enhancing testing efficiency, adaptability, and depth of automated validation to ensure high-quality deliverables.</p>
            <p>Collaborated with cross-functional teams to deliver successful projects and meet business requirements.</p>
            <p>Utilized AzureDevOps to manage project tasks and ensure timely delivery of features.</p>
          </div>
          <div className={styles['experience-block']}>
            <h3>Arber Marketplace</h3>
            <p>Created web templates using HTML and CSS, implemented JavaScript for dynamic functionalities, and handled occasional database interactions.</p>
            <p>Worked with CMS platforms like CS Cart and WordPress.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}