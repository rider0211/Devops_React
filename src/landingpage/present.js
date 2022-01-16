import {React} from 'react';
import {Box, Container, Typography,} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Present = () =>{

    return(
        <div>
            <Box sx={{
                height : '150px',
                paddingTop:'50px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container xl>
                        <Typography
                            textAlign={'center'}
                            fontWeight={'light'}
                            fontFamily={'PT Serif, Georgia, serif'}

                            variant='h5'
                        >
                            Present Your Product
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h6'
                        >
                            Opalin helps you present your business in a wide variety of ways. Display full-width images, divide content in a single or multiple columns, anything to make your product or service stand out!
                        </Typography>
                    </Container>
            </Box>
        </div>
    );

}
export default Present;