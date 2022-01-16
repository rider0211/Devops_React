import {React, StrictMode} from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import {
    Box, 
} from '@mui/material';


import Calendar from './calendar';


const Content = () =>{
    var i = 1;
    return(
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', marginTop:'30px', marginBottom:'30px', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
                <Box sx={{p:4}}>
                    <StrictMode>
                        <Calendar />
                    </StrictMode>
                </Box>
            </Box>
        </Container>
    );
}
export default Content;
