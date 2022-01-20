import React, { StrictMode, useState, useEffect, createContext } from 'react';
import {
   Grid, Container, Box
} from '@mui/material';
import Ec2Graph from "./ec2Graph";
import Ec2Detail from './ec2Detail';
import Ec2Table from './ec2Table';
import { getEc2Count, getEc2instance } from '../../../action';
import jwt_decode from 'jwt-decode';
import * as configs from '../../../config/config';



export const Ec2CountDataContext = createContext();

const Content = () =>{
  const [ec2countdata, setEc2countdata] = useState([]);
  const [ec2instancedata, setEc2instancedata] = useState([]);

  useEffect(()=>{
    getEc2Count( res => {
      var data = jwt_decode(res.data.data, configs.secret);
      setEc2countdata(data);
    });
    getEc2instance( res => {
      var data = jwt_decode(res.data.data, configs.secret);
      setEc2instancedata(data);
    });

  },[]);

    return(
      <Ec2CountDataContext.Provider value={{ec2countdata, ec2instancedata}}>
        <Container maxWidth="lg"  sx={{marginTop:'30px', marginBottom:'30px'}}>
          <Box>
            <StrictMode>
              <Grid container spacing={12}>
                <Grid item xs={12} lg={12}>
                  <Ec2Graph />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Ec2Table />
                </Grid>
                <Grid item xs={12} lg={12}>
                <Ec2Detail prop = {ec2instancedata} />
                </Grid>
              </Grid>
            </StrictMode>
          </Box>
        </Container>
      </Ec2CountDataContext.Provider>
    );
}
export default Content;

