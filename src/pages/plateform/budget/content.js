import React, { StrictMode, useState, useEffect, createContext } from 'react';
import {
    Button, Grid, Container, Box
} from '@mui/material';


import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import M2dchart from "./m2dChart";
import Y2mchart from "./y2mChart";
import Lts3days from './lts3days';
import { getM2dData, getY2mData, getLtsData} from '../../../action';
import jwt_decode from 'jwt-decode';
import * as configs from '../../../config/config';

  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: blue[100],
    fontSize: '13px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:blue[700],
    '&:hover': {
        color: grey[50],
        backgroundColor: blue[100],
    },
    marginLeft:'10px',
    textTransform:'none'
    }));

export const BudgetDataContext = createContext();

const Content = () =>{
  
  const [m2dChartData, setm2dChartData] = useState([]);
  const [y2mChartData, sety2mChartData] = useState([]);
  const [ltsData, setLtsData]           = useState([]);
  useEffect(()=>{
    getM2dData( (res) => {
      var data = jwt_decode(res.data.data, configs.secret);
      setm2dChartData(data);
    });
    getY2mData( (res) => {
      var data = jwt_decode(res.data.data, configs.secret);
      sety2mChartData(data);
    });
    getLtsData( (res) => {
      var data = jwt_decode(res.data.data, configs.secret);
      setLtsData(data);
    })
  },[]);

    return(
      <BudgetDataContext.Provider value={{m2dChartData,y2mChartData,ltsData}}>
        <Container maxWidth="lg"  sx={{marginTop:'30px'}}>
          <Box>
            <StrictMode>
              <Grid container spacing={12}>
                <Grid item xs={12} lg={5}>
                  <M2dchart />
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Y2mchart />
                </Grid>
              </Grid>
              <Grid container spacing={12}>
                <Grid item xs={12} lg={12}>
                  <Lts3days />
                </Grid>
              </Grid>
            </StrictMode>
          </Box>
        </Container>
      </BudgetDataContext.Provider>
    );
}
export default Content;
