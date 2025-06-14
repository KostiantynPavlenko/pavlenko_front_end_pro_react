import { Grid } from "@mui/material";

import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <Grid container spacing={2} sx={{padding: '20px'}}>
        <Grid size={8}>
          <h1>Kostiantyn Pavlenko</h1>
          <p>I am a front-end developer with 2 years of hands-on experience building responsive, user-focused web applications using modern frameworks like Angular and React. I specialize in creating clean, maintainable interfaces that prioritize both performance and usability.</p>
          <p>Throughout my career, I’ve collaborated with cross-functional teams to deliver scalable solutions, turning complex requirements into intuitive digital experiences.</p>
          <p>I value clear communication, attention to detail, and continuous learning. Whether working independently or as part of a team, I am committed to delivering high-quality code that supports business goals and improves user satisfaction.</p>
          <h2>Education</h2>
          <p>O.S. Popov Odesa National Academy of Telecommunication</p>
          <p>Computer Science | 2020-2022</p>
          <p>Odesa College of Computer Technology</p>
          <p>Software Engineering | 2016-2020</p>
        </Grid>
        <Grid size={4}>
          <h2>Skills</h2>
          <p>Frameworks/Libraries:</p>
          <ul className={styles['skill-list']}>
            <li>Angular</li>
            <li>NgRx</li>
            <li>RxJs</li>
            <li>React</li>
            <li>Redux / Redux Toolkit</li>
            <li>React Router</li>
            <li>Formik</li>
          </ul>
          <p>Languages/Standards:</p>
          <ul className={styles['skill-list']}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>Sass / SCSS</li>
            <li>CSS Modules</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
          </ul>
          <p>Testing Tools:</p>
          <ul className={styles['skill-list']}>
            <li>Jest</li>
            <li>Selenium</li>
            <li>TestCafe</li>
            <li>Postman</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}