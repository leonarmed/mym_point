import React, { useState } from 'react';
import { Container, Box, SpeedDial, SpeedDialAction } from "@mui/material";
import Header from "./Sections/Header";
import Services from "./Sections/Services";
import BindingService from "./Sections/BindingService";
import Localization from "./Sections/Localization";
import Footer from "./Sections/Footer";
import { WhatsApp,  } from '@mui/icons-material';

import "./assets/scss/style.scss";
import Suggestion from './Sections/Suggestion';

const actions = [
  { icon: <WhatsApp />, name: 'Paseo Galería', href: "https://wa.me/595994343311?text=Hola%20quisiera%20información%20sobre%20" },
  { icon: <WhatsApp />, name: 'Plaza Madero', href: "https://wa.me/595994133311?text=Hola%20quisiera%20información%20sobre%20" },
];

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth={false} sx={{paddingLeft:0, margin:0}} className="main-container">
      <Box>
        <Header />
        <Services />
        <BindingService />
        <Suggestion />
        <Footer />
      </Box>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: "20px", right: "40px", zIndex:"11" }} className="whatsapp-contact">
        <SpeedDial
          ariaLabel="Contacto por Whatsapp"
          icon={<WhatsApp />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          FabProps={{
            sx: {
              bgcolor: 'success.main',
              '&:hover': {
                bgcolor: 'success.main',
              }
            }
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
              FabProps={{
                href:`${action.href}`,
                formTarget:"_blank",
                sx: {
                  color:  "white",
                  bgcolor: 'success.main',
                  '&:hover': {
                    bgcolor: `${action.name==="Paseo Galería" ? "#1771fb" : "#fb6917"}`,
                  }
                }
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </Container>
  );
}

export default App;
