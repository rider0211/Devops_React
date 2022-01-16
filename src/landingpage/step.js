import {React} from 'react';
import {Box, Container, Typography, Grid, Link} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const timeClass = {
    dot:{
            '&::before':{
            borderRadius: '50%',
            background: '#575bde',
            border: '4px solid #fff',
            content: "",
            height: '1rem',
            left: '-3px',
            position: 'absolute',
            top: '-33px',
            width: '1rem'
        }
    }
}
const Step = () =>{

    return(
        <div>
            <Box sx={{
                height : '500px',
                backgroundColor:'#f6f6f9',
                paddingTop:'80px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container xl>
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h5'
                        >
                        5-Minute Setup
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            paddingTop={'10px'}
                            variant='h6'
                        >
                        At vero eos et accusamus et iusto odio dignissimos ducimus.
                        </Typography>
                        <Box
                        sx={{marginTop:'40px'}}
                        >
                            <Grid container spacing={1}>
                                <Grid container item spacing={3} >
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant='h7' color="text.secondary" gutterBottom>
                                            Step 1
                                            </Typography>
                                            <Typography variant="h5" component="div" paddingTop={'10px'}>
                                            Download
                                            </Typography>
                                            <Typography variant="h6" fontWeight={'light'} paddingTop={'10px'}>
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant='h7' color="text.secondary" gutterBottom>   
                                            Step 2
                                            </Typography>
                                            <Typography variant="h5" component="div" paddingTop={'10px'}>
                                            Customize
                                            </Typography>
                                            <Typography variant="h6" fontWeight={'light'} paddingTop={'10px'}>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur mollit.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                        <Typography variant='h7' color="text.secondary" gutterBottom>   
                                            Step 3
                                            </Typography>
                                            <Typography variant="h5" component="div" paddingTop={'10px'}>
                                            Upload
                                            </Typography>
                                            <Typography variant="h6" fontWeight={'light'} paddingTop={'10px'}>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                    <Card sx={{ minWidth: 275, backgroundColor:'#1d1a3d'}}>
                                        <CardContent>
                                            <Typography variant='h7' color="white" gutterBottom>   
                                            Step 4
                                            </Typography>
                                            <Typography variant="h5" color="white" component="div" paddingTop={'10px'}>
                                            Done
                                            </Typography>
                                            <Typography variant="h6" color="white" fontWeight={'light'} paddingTop={'10px'}>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            paddingTop={'50px'}
                            fontSize={'13px'}
                            color={'text.secondary'}
                        >
                        If you need any help, make sure to <Link> book a demo.</Link>
                        </Typography>
                    </Container>
            </Box>
        </div>
    );

}
export default Step;