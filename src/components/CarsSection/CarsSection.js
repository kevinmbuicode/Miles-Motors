import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';
import SingleCar from './SingleCar/SingleCar';
import {   useSelector} from 'react-redux'


const CarsSection = ({ dataAmount }) => {
      
const {search}= useSelector((state)=>state.query)
const {type}= useSelector((state)=>state.type)

    const [cars, setCars] = useState(null);


    useEffect(() => {
         const FetchCars = async () => {
            
        // const {data} =  await axios.get(`https://milesmotors.herokuapp.com/cars/${dataAmount ? dataAmount : 'all'}`,{
        const {data} =  await axios.get(`https://smartapi-lzd3.onrender.com/cars/${dataAmount ? dataAmount : 'all'}`,{
            params:{
                name:search,
                brand:type
            }
        })
        setCars(data)
        // console.log(data)
    }
        FetchCars()   
    }, [dataAmount,search,type])


    return (!cars ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', mx: 'auto', p: 2, justifyContent: "center" }}>
            <Typography variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Popular Cars</Typography>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
                sx={{ justifyContent: 'center' }}>
                {
                    cars.map(carInfo => <SingleCar carInfo={carInfo} key={carInfo.carID} />)
                }
            </Grid>
        </Box>
    );
};

export default CarsSection;