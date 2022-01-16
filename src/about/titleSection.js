import {React} from 'react';
import {Box, Container, Typography,} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () =>{

    return(
        <div>
            <Box sx={{
                height : {lg:'351px', xs:'500px'},
                backgroundColor:'#f6f6f9',
                paddingTop:'156px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container xl>
                        <Typography
                            textAlign={'center'}
                            fontWeight={'light'}
                        >
                            Who We Are
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            fontWeight={'900'}
                            variant={'h2'}
                        >
                            We're a community of designers and developers creating tools for the web.
                        </Typography>
                    </Container>
            </Box>
        </div>
    );

}
export default Header;