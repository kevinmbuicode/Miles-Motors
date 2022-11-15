import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
import AllCarsLogo from "../images/AllCarsLogo.jpg";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const About = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["roboto"].join(","),
      fontWeightLight:600,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: 2,
          marginLeft: 5,
          marginRight: 4,
          
        }}
      >
        <Typography
          variant="h4"
          color="red"
          sx={{ textAlign: "center", marginBottom: 2 }}
        >
          About Us
        </Typography>
        <Typography variant="p" sx={{ fontSize: "1rem" }}>
          Miles Motors Ltd was established in 2011. We are a Brand New & Used
          Car Dealership that is situated along Chyulu road, behind The Kenya
          National Library in Upper-hill, Nairobi. We offer the best deal prices
          around and also keep up to our record of being Kenya's Number 1 local
          and international car dealership. Miles Motors Ltd was established in
          2011. We are a Brand New & Used Car Dealership that is situated along
          Chyulu road, behind The Kenya National Library in Upper-hill, Nairobi.
          We offer the best deal prices around and also keep up to our record of
          being Kenya's Number 1 local and international car dealership.
        </Typography>
        <Typography variant="h5" sx={{ marginTop: 1, color: "red" }}>
          Services Offered
        </Typography>
        <Typography>
          <ul>
            <li>Car Sales. i.e: Brand New and Foreign Used cars.</li>
            <li>
              Trade-in: For those wanting to upgrade from their current used
              units to a newer version.
            </li>
            <li>Importation of desired cars on behalf of customers.</li>
            <li>Buy locally used cars for re-sale.</li>
            <li>
              Liaise with financial institutions, i.e: Banks & Micro Finance to
              provide car financing.
            </li>
            <li>
              Liaise with Insurance firms to provide insurance for customers
              text
            </li>
          </ul>
        </Typography>
        <Typography variant="h5" color="red">
          Our Brands
        </Typography>
        <Typography variant="p">
          We stock a wide variety of brands including, but not limited to;
          Toyota, Mercedes Benz, Lexus, Nissan, Subaru, Mazda, Isuzu, Suzuki,
          Volkswagen, Range Rover, Hyundai, Mitsubishi, Volvo, Honda, BMW, Audi,
          Jeep etc.
        </Typography>
        <Box>
          <img src={AllCarsLogo} alt="Cars_Logos" height="10%" width="100%" />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default About;
