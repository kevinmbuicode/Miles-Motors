import { Button,Alert, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material';
import { Box, styled } from '@mui/system';
import axios from 'axios';
import React from 'react';
import {Link} from "react-router-dom"
import useAuth from "../AdminParts/../../../others/useAuthContext"
import {useHistory} from 'react-router-dom'

// styled component for font awesome icon
const Icon = styled('i')(({ theme }) => ({
    color: '#00000099',
    fontSize: '22px', margin: '5px 10px 5px 0'
}));


const AddNewCar = ({ setProcessStatus, showSnackbar }) => {
    const[status,setStatus]=React.useState("")
    const[failed,setFailed]=React.useState("")
    const history=useHistory()
  const {currentUser,logout}=useAuth()
  const[error,setError]=React.useState('')
  async function handleLogout(){
   setError('')
   try{
await logout()
history.push("/login")
   }
   catch(e){
    setFailed(`failed to logout!`)
   }

  }

 
   

    const [values, setValues] = React.useState({}) // form values state
    const [carType, setCarType] = React.useState('') // form car type state
    const [fuel, setFuel] = React.useState('') // form fuel type state
    // handle changing value in form
    const handleValueChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    // add new car in database
    const handleSubmit = (event) => {
        const newCarInfo = { ...values, carType, fuel }
        axios.post('https://milesbackend.onrender.com/car', newCarInfo)
            .then(({ data }) => {
                if (data.code===1) {
                  setStatus(`car added succesfully`)
                    showSnackbar()
                    event.target.reset()
                }
            })
            .catch(err => {
          setStatus(`car not added, there was an error`)
                showSnackbar() // show notification popup containing status
            })
        event.preventDefault()
    }
    return (
        <Box>
            {error&& <Alert severity="error">{error}</Alert>}
             {status && <Alert severity="success">{status}</Alert>}
              {failed&& <Alert severity="error">{failed}</Alert>}
                        <Typography variant="h4" align="center" color="primary" fontWeight="bold">{`User:${currentUser.email}`}</Typography>
            <Typography variant="h4" align="center" color="primary" fontWeight="bold">Add New Car In Shop</Typography>
            <Box maxWidth="sm" sx={{ my: 4, mx: 'auto' }}>

                {/* new car information form */}
                <form onSubmit={handleSubmit}>
                    <Grid container rowSpacing={3.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            {/* car name */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-file-signature"></Icon>
                                <TextField fullWidth label="Car Name"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('carName')} />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            {/* car body color */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-palette"></Icon>
                                <TextField fullWidth label="Body Color"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('color')} />
                            </Box>
                        </Grid>
                         <Grid item xs={6} md={4}>
                            {/* car body color */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-palette"></Icon>
                                <TextField fullWidth label="Unique ID"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('carID')} />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            {/* car type selector */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-car"></Icon>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel>Car Brand</InputLabel>
                                    <Select fullWidth required
                                        value={carType}
                                        onChange={(e) => setCarType(e.target.value)}
                                    >
                                        <MenuItem value={'Toyota'}>Toyota</MenuItem>
                                        <MenuItem value={'Subaru'}>Subaru</MenuItem>
                                        <MenuItem value={'Audi'}>Audi</MenuItem>
                                        <MenuItem value={'Mazda'}>Mazda</MenuItem>
                                        <MenuItem value={'Ford'}>Ford</MenuItem>
                                           <MenuItem value={'Nissan'}>Ford</MenuItem>
                                            <MenuItem value={'Suzuki'}>Suzuki</MenuItem>
                                            <MenuItem value={"Volkswagen"}>Volks Wagen</MenuItem>
                                            <MenuItem value={"Honda"}>Honda</MenuItem>
                                             <MenuItem value={"Mitsubishi"}>Mitsubishi</MenuItem>
                                            




                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            {/* car mileage input */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-road"></Icon>
                                <TextField fullWidth label="Mileage"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">km</InputAdornment>,
                                    }}
                                    variant="standard" type="number"
                                    onChange={handleValueChange('mileage')}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* car transmission status */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-tachometer-alt"></Icon>
                                <TextField fullWidth label="Transmission"
                                    variant="standard" required text="text"
                                    onChange={handleValueChange('transmission')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* car engine info */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-cogs"></Icon>
                                <TextField fullWidth label="Engine"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('engine')} />
                            </Box>
                        </Grid>
                        <Grid item xs={5} md={4}>
                            {/* car fuel type input */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-gas-pump"></Icon>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel>Fuel</InputLabel>
                                    <Select fullWidth required
                                        value={fuel}
                                        onChange={(e) => setFuel(e.target.value)}
                                    >
                                        <MenuItem value={'gasoline'}>Gasoline</MenuItem>
                                        <MenuItem value={'diesel'}>Diesel</MenuItem>
                                        <MenuItem value={'bio-diesel'}>Bio-Diesel</MenuItem>
                                        <MenuItem value={'ethanol'}>Ethanol</MenuItem>
                                        <MenuItem value={'petrol'}>Petrol</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={7} md={8}>
                            {/* car price in us dollar */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-dollar-sign"></Icon>
                                <TextField fullWidth label="Price"
                                    variant="standard" required type="number"
                                    onChange={handleValueChange('price')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Img URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('carImg')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 2 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image2')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 3 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image3')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 4 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image4')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 5 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image5')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 6 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image6')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 7 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image7')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 8 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image8')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 9 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image9')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car image url */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-image"></Icon>
                                <TextField fullWidth label="Image 10 URL"
                                    variant="standard" required type="url"
                                    onChange={handleValueChange('image10')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            {/* car description textarea */}
                            <TextField fullWidth multiline
                                rows={4} sx={{ my: 2 }}
                                label="Description" variant="outlined"
                                type="text" required
                                onChange={handleValueChange('description')} />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'right' }}>
                            <Button type="submit" variant="outlined"
                                >Add to Database</Button>
                        </Grid>

                         <Grid item xs={12} sx={{ textAlign: 'right' }}>
                       <Typography component={Link} to="/manage">
                        Manage All cars
                       </Typography>
                        </Grid>
                         <Grid item xs={12} sx={{ textAlign: 'right' }}>
                       <Typography
                       onClick={handleLogout}
                        component={Button} >
                       Logout
                       </Typography>
                        </Grid>


                    </Grid>
                </form>
            </Box>

        </Box>
    );
};

export default AddNewCar;
