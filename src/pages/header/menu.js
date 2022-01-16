import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

export default function Pagemenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgba(77, 89, 149, 0.06)',
    fontSize: '13px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:blue[700],
    '&:hover': {
        color: grey[50],
        backgroundColor: blue[100],
    },
    marginRight:'10px',
    textTransform:'none',
    fontWeight:'normal'
    }));
  return (
    <div>

        <ColorButton
            id="basic-button"
        >
            Knoledge base
        </ColorButton>


        <ColorButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onMouseOut={handleClose}
        >
        Support
        </ColorButton>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            sx={{
                paddingTop:'8px',
                marginTop:'50px',
                marginLeft:'250px'
            }}
        >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

        <ColorButton
            id="basic-button"
        >
            Plateform
        </ColorButton>
    </div>
  );
}
