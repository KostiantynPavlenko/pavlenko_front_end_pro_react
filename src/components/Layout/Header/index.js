import { useNavigate } from "react-router";

import { 
  AppBar,
  Container,
  Box,
  Button
 } from "@mui/material";

export default function Header() {

  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" sx={{py: { xs: 2, sm: 2 }}}>
        <Container sx={{display: 'flex', alignItems: 'center', height: '100%'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 8}}>
            <Button 
              onClick={() => navigate("/")}
              sx={{color: 'white', display: 'block'}}
            >Home</Button>
            <Button 
              onClick={() => navigate("experience")}
              sx={{color: 'white', display: 'block'}}
            >Experience</Button>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}