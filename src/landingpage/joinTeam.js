import {React} from 'react';
import {Box, Container, Typography,Grid, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import './banner.css';

const ColorButton = styled(Button)(({ theme }) => ({
    borderRadius:'40px',
    backgroundColor: 'rgba(255,255,255, 0.1)',
    fontSize: '13px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:'#fff',
    '&:hover': {
        color: '#fff',
        backgroundColor: 'rgba(255,255,255, 0.5)',
    },
    marginRight:'10px',
    marginLeft:'20px',
    marginTop:'20px',
    textTransform:'none',
    fontWeight:'normal'
    }));

const JoinTeam = () =>{

    return(
        <div>
            <Box 
                id="teamjoin"
                sx={{
                    p:5,
                    height:'300px'
                }}>
                <Container xl sx={{paddingTop:'120px'}}>
                        <Typography
                            textAlign={'center'}
                            fontWeight={'light'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h5'
                            color={'white'}
                        >
                            Want to join the team?
                        </Typography>
                        
                        <Typography
                            textAlign={'center'}
                            fontFamily={'PT Serif, Georgia, serif'}
                            variant='h6'
                            color={'white'}

                        >
                        We’re hiring. Work from anywhere.
                        </Typography>
                        <Box
                        sx={{
                            textAlign:'center'
                        }}>

                            <ColorButton
                            >
                                Job Openings
                            </ColorButton>
                        </Box>
                    </Container>
            </Box>
        </div>
    );

}
export default JoinTeam;