import React, { StrictMode } from 'react';
import {
    Button, Grid, Container, Box
} from '@mui/material';


import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import M2dchart from "./m2dChart";
import Y2mchart from "./y2mChart";
import Lts3days from './lts3days';


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
    );
}
export default Content;
