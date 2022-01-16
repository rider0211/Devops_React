import {React} from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';

const TimeLine = () =>{

    return(
        <div>
            <Box sx={{
                height : {lg:'390px', xs:'650px'},
                backgroundColor:'#f6f6f9',
                paddingTop:'80px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container xl>
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h4'
                        >
                            Timeline
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            paddingTop={'10px'}
                            variant='h5'
                        >
                            The best stories are told from start to finish, that's why we keep track of history.
                        </Typography>
                        <Box
                        sx={{flexDirection: 'row', borderTopStyle:'solid', borderTopColor:'#ddd', borderTopWidth:'1px', marginTop:'70px'}}
                        >
                            <Grid container spacing={1}>
                                <Grid container item spacing={3} >
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Research
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Ideation
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur mollit.
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Development
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="customtimeline">
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h5'
                                    >
                                        Launch
                                    </Typography>
                                    <Typography
                                        fontFamily={'PT Serif, Georgia, serif'}
                                        paddingTop={'10px'}
                                        variant='h6'
                                    >
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
            </Box>
        </div>
    );

}
export default TimeLine;