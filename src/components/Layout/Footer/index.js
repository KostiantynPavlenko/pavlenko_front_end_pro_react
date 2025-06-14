import {Box, Container } from "@mui/material";

import styles from './Footer.module.css'; 

 export default function Footer() {
  return (
    <div>
      <Box sx={{
            position: { xs: 'static', sm: 'fixed' },
            bottom: 0,
            py: { xs: 2, sm: 2 },
            width: '100%',
            backgroundColor: '#39c785'}}>
        <Container maxWidth={false} sx={{display: 'flex', height: '100%'}}>
          <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 4
                }}>
            <h3>Contacts</h3>
            <a href="tel:380 93 280 78 31" className={styles['contact-link']}>+380 93 280 78 31</a>
            <a href="mailto:kostianpv@gmail.com" className={styles['contact-link']}>kostianpv@gmail.com</a>
            <a 
              href="https://www.linkedin.com/in/kostiantynpavlenko/" 
              className={styles['contact-link']} 
              target="_blank"
              rel="noreferrer"
            >Linkedin</a>
          </Box>
        </Container>
      </Box>
    </div>
  )
 }