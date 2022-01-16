import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: '11px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:grey[500],
    '&:hover': {
        color: blue[700],
        backgroundColor:'#fff'
    },
    marginRight:'10px',
    textTransform:'none'

    }));

const Footer = () =>{
    const navigate = useNavigate();
    const handle = (e) =>{
        if(e.target.name == 'about'){
            navigate('/about');
        }else if(e.target.name === 'team'){
            navigate('/team');
        }else{
            navigate('/contact');
        }
    }
    return(
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'row',
            bgcolor: 'background.flex',
            p:1,
            backgroundColor:'#fff',
            borderBlockEnd:'solid 1px #ddd',
            justifyContent:"space-between",
            alignItems:"stretch",
            
            }}>
            <Box>
                <ColorButton
                name='about'
                onClick={handle}
                >
                    About
                </ColorButton>
                <ColorButton
                name='team'
                onClick={handle}
                >
                    Team
                </ColorButton>
                <ColorButton
                name='contact'
                onClick={handle}
                >
                    Contact
                </ColorButton>
            </Box>
            <Box>
                <ColorButton
                onClick={handle}
                >
                    2021© Keenthemes
                </ColorButton>
            </Box>
        </Box>
    );
}
export default Footer;