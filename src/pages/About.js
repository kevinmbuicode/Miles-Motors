import { Box, Typography } from "@mui/material";
import React from "react";
import AllCarsLogo from '../images/AllCarsLogo.jpg'

const About = () => {
  return (
    <Box sx={{ margin: 2}}>
      <Typography variant="h4" color='red'>About Us</Typography>
      <Typography variant="p">
        Miles Motors Ltd was established in 2011. We are a Brand New & Used Car
        Dealership that is situated along Chyulu road, behind The Kenya National
        Library in Upper-hill, Nairobi. We offer the best deal prices around and
        also keep up to our record of being Kenya's Number 1 local and
        international car dealership. Miles Motors Ltd was established in 2011.
        We are a Brand New & Used Car Dealership that is situated along Chyulu
        road, behind The Kenya National Library in Upper-hill, Nairobi. We offer
        the best deal prices around and also keep up to our record of being
        Kenya's Number 1 local and international car dealership.
      </Typography>
      <Typography variant="h5" sx={{ marginTop: 1, color:'red' }}>
        Services Offered
      </Typography>
      <Typography>
        <ul>
          <li>Car Sales. i.e: Brand New and Foreign Used cars.</li>
          <li>
            Trade-in: For those wanting to upgrade from their current used units
            to a newer version.
          </li>
          <li>Importation of desired cars on behalf of customers.</li>
          <li>Buy locally used cars for re-sale.</li>
          <li>
            Liaise with financial institutions, i.e: Banks & Micro Finance to
            provide car financing.
          </li>
          <li>
            Liaise with Insurance firms to provide insurance for customers text
          </li>
        </ul>
      </Typography>
      <Typography variant="h5" color='red'>Our Brands</Typography>
      <Typography variant="p">
        We stock a wide variety of brands including, but not limited to; Toyota,
        Mercedes Benz, Lexus, Nissan, Subaru, Mazda, Isuzu, Suzuki, Volkswagen,
        Range Rover, Hyundai, Mitsubishi, Volvo, Honda, BMW, Audi, Jeep etc.
      </Typography>
      <Box>
      <img src={AllCarsLogo} alt="Cars_Logos" height='10%' width='100%'/>
      </Box>
    </Box>
  );
};

export default About;
