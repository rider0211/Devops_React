import {React} from 'react';
import {Box, Container, Typography,Grid} from '@mui/material';

const Investors = () =>{

    return(
        <div>
            <Box sx={{
                height : '351px',
                backgroundColor:'#fff',
                paddingTop:'80px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container maxWidth='lg'>
                    <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h4'
                        >
                            Our Investors
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            paddingTop={'10px'}
                            variant='h5'
                        >
                            We've completed a $120 million Series B financing round.
                        </Typography>
                        <Box
                        sx={{flexDirection: 'row', marginTop:'70px'}}
                        >
                            <Grid container spacing={1}>
                                <Grid container item spacing={3} >
                                    <Grid item xs={3}>
                                    <Box display={'grid'} sx={{justifyContent:'center'}}>
                                    <Box
                                        component="img"
                                        sx={{
                                            justifyContent:'center'
                                        }}
                                        src="/static/img/trusted-company.png"
                                        />
                                    </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Box display={'grid'} sx={{justifyContent:'center'}}>
                                    <Box
                                        component="img"
                                        sx={{
                                            justifyContent:'center'
                                        }}
                                        src="/static/img/trusted-company.png"
                                        />
                                    </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Box display={'grid'} sx={{justifyContent:'center'}}>
                                    <Box
                                        component="img"
                                        sx={{
                                            justifyContent:'center'
                                        }}
                                        src="/static/img/trusted-company.png"
                                        />
                                    </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Box display={'grid'} sx={{justifyContent:'center'}}>
                                    <Box
                                        component="img"
                                        sx={{
                                            justifyContent:'center'
                                        }}
                                        src="/static/img/trusted-company.png"
                                        />
                                    </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
            </Box>
        </div>
    );

}
export default Investors;
