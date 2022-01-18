import React, { StrictMode } from 'react';
import {
    Button, Grid, Container, Box
} from '@mui/material';


import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import Ec2Graph from "./ec2Graph";
import Ec2Detail from './ec2Detail';
import Ec2Table from './ec2Table';


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

const Content = () =>{
    return(
        <Container maxWidth="lg"  sx={{marginTop:'30px'}}>
          <Box>
            <StrictMode>
              <Grid container spacing={12}>
                <Grid item xs={12} lg={6}>
                  <Ec2Graph />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Ec2Table />
                </Grid>
              </Grid>
              <Grid container spacing={12}>
                <Grid item xs={12} lg={12}>
                  <Ec2Detail />
                </Grid>
              </Grid>
            </StrictMode>
          </Box>
        </Container>
    );
}
export default Content;
