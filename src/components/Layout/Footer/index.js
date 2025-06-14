import {Box, Container } from "@mui/material";

import styles from './Footer.module.css'; 

 export default function Footer() {
  return (
    <>
      <Box position="fixed" sx={{bottom: 0, height: '60px', width: '100%', backgroundColor: '#39c785'}}>
        <Container sx={{display: 'flex', alignItems: 'center', height: '100%'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 4}}>
            <h3>Contacts</h3>
            <a href="tel:380 93 280 78 31" className={styles['contact-link']}>+380 93 280 78 31</a>
            <a href="mailto:kostianpv@gmail.com" className={styles['contact-link']}>kostianpv@gmail.com</a>
            <a href="https://www.linkedin.com/in/kostiantynpavlenko/" className={styles['contact-link']} target="_blank">Linkedin</a>
          </Box>
        </Container>
      </Box>
    </>
  )
 }