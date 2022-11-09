import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { FirstName,LastName, email, message } = e.target.elements
      let conFom = {
        FirstName:FirstName.value,
        LastName:LastName.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }

  return (
    <Box sx={{ display: "flex", justifyContent: {sm: "center"}}}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: {sm: 5}
      }}
    >
      <Typography variant="h4" fontSize="bold">Contact Us</Typography>
      <Typography>
        Got any question? Send as a message below.
      </Typography>
      <form onSubmit={onSubmit}>
      <Box sx={{ display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 1}}>
        
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 2}}>
         
              <label htmlFor="First name" id="FirstName">
                First name
              </label>
              <TextField id="FirstName" placeholder="Enter your first name" required/>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: 2}}>
              <label htmlFor="Last name" id="LastName">
                Last name
              </label>
              <TextField id="LastName" placeholder="Enter your last name" required />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}>
              <label htmlFor="email" id="email">
                Email
              </label>
              <TextField id="email" type="email" placeholder="youremail@email.com" required />
              </Box>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}>
              <label htmlFor="number" id="number">
                Phone Number
              </label>
              <TextField id="number" type='number' required />
              <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column" }}>
              <label htmlFor="message" id="message">
                Message
              </label>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={7}
                id="message"
                required
                placeholder="Send us a message and we'll reply as soon as possible.."
                style={{ margin: 5 }}
                />
                </Box>
             
                <Button variant="contained" sx={{ width: "100%" }} type="submit" >{formStatus}</Button>
       
      </Box>
      </form>
    </Box>

    </Box>
  );
};

export default Contact;