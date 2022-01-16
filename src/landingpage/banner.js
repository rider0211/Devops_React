import {React} from 'react';
import {Box, Container, Typography,Grid, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import './banner.css';

const ColorButton = styled(Button)(({ theme }) => ({
    borderRadius:'40px',
    background: 'linear-gradient(140deg, #575bde 25%, #393ed8 100%)',
    fontSize: '1rem',
    marginTop:'30px',
    padding:'10px',
    color: '#fff',
    '&:hover': {
        color: '#fff',
        background: 'linear-gradient(160deg, #575bde 25%, #393ed8 100%)',
        
    },
    textTransform:'none',
    fontWeight:'900'
    }));

const Banner = () =>{

    return(
        <div>
            <Box sx={{
                paddingTop:'200px',
                height : '1800px',
                }}
                id="bannerBox">
                <Container maxWidth='sl'>
                    <Box
                    sx={{
                        marginTop:'150px',
                        height:'1000px'
                    }}
                    >
                        <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: {lg:'repeat(3, 1fr)', xs:'repeat(1, 1fr)' },
                            p:5
                        }}
                        >
                            <Box>
                                <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h3' color={'white'} fontWeight={'900'}>
                                    Martech Service
                                </Typography>   
                                <Typography  variant='h6' color={'white'} fontWeight={'light'}>
                                The EDP platform provides a robust single view of a marketing contact sourcing data from disparate systems and tying it back togather through a MDM process
                                </Typography>
                                <ColorButton
                                >
                                    Get Started
                                </ColorButton>
                            </Box>
                            <Box component="img"
                                sx={{
                                    justifyContent:'center',
                                    marginLeft:{lg:'30px', xs:'0px'},
                                    marginTop:{lg:'-150px', xs:'0px'}
                                }}
                                src="/static/img/hero-illustration.png"
                            />
                        </Box>
                        <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: {lg:'repeat(3, 1fr)', xs:'repeat(1, 1fr)' },
                            p:5,
                            marginTop:{lg:'200px', xs:'100px'}
                        }}
                        >
                            <Box>
                                <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h5' color={'white'} fontWeight={'900'}>
                                Custom Framework

                                </Typography>   
                                <Typography  variant='h6' color={'white'} fontWeight={'light'}>
                                Everything is neatly organized in Sass and has been heavily focused on performances.
                                </Typography>
                            </Box>
                            <Box
                            component="img"
                            sx={{
                                justifyContent:'center',
                                marginLeft:{lg:'30px', xs:'0px'},
                                marginTop:{lg:'-150px', xs:'0px'}
                            }}
                            src="/static/img/editor.png"
                            />
                        </Box>
                        <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: {lg:'repeat(3, 1fr)', xs:'repeat(1, 1fr)' },
                            p:5,
                            marginTop:'200px'
                        }}
                        >
                            <Box
                            component="img"
                            sx={{
                                justifyContent:'center',
                                marginTop:'-150px'
                            }}
                            src="/static/img/sketch.png"
                            />
                            <Box sx={{paddingLeft:'30px'}}>
                                <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h5' color={'white'} fontWeight={'900'}>
                                Designed In Sketch
                                </Typography>   
                                <Typography  variant='h6' color={'white'} fontWeight={'light'}>
                                100% of this HTML template, including all modules and components have been designed in Sketch.
                                </Typography>
                            </Box>
                            
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );

}
export default Banner;