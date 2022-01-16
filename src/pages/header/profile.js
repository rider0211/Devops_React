import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { blue, grey, green } from '@mui/material/colors';
import Box from '@mui/material/Box';

export default function Profile() {

  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor:'none',
    fontSize: '14px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:grey[400],
    '&:hover': {
        color: grey[50],
        backgroundColor:'none'
    },
    marginRight:'10px',
    textTransform:'none'

    }));
  return (
    <div>
        <ColorButton
            id="basic-button"
            startIcon={'Hi'}
            endIcon={<Box sx={{backgroundColor: '#C9F7F5', borderRadius:2, color:'#1BC5BD', paddingLeft:'10px', paddingRight:'10px'}}>s</Box>}
        >
            Sean
        </ColorButton>
    </div>
  );
}
