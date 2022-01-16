import {React} from 'react';
import PropTypes  from 'prop-types';
import {Box, AppBar, Link, Button, Stack, CssBaseline, useScrollTrigger, Slide} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius:'40px',
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
  marginLeft:'20px',
  textTransform:'none',
  fontWeight:'normal'
  }));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
    );
}


HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
const Header = (props) =>{
    const navigate = useNavigate();

    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }

    return(
        <div>
            <CssBaseline />
            <HideOnScroll {...props}>
            <AppBar sx={{
                background:'none',
                boxShadow:'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'space-between'}}>
                <Box>
                    <Box
                        component="img"
                        sx={{
                            height: '88px',
                            width: '128px',
                            paddingLeft: '29px',
                        }}
                        src="/static/img/favicon.svg"
                    />
                    <Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => {
                        navigate('/Home');
                    }}
                    color={'white'}
                    sx={{
                        paddingLeft:"35px"

                    }}
                    >
                        Home
                    </Link>
                    <Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => {
                        navigate('/plateform');
                    }}
                    color={'white'}
                    sx={{
                        paddingLeft:"35px"
                        
                    }}
                    >
                        Plateform
                    </Link>
                    <Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => {
                        navigate('/support');
                    }}
                    color={'white'}
                    sx={{
                        paddingLeft:"35px"
                        
                    }}
                    >
                        Support
                    </Link>
                    <Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => {
                        navigate('/about');
                    }}
                    color={'white'}
                    sx={{
                        paddingLeft:"35px"
                        
                    }}
                    >
                        About
                    </Link>
                </Box>
                <Box sx={{marginTop:'20px', marginRight:'20px'}}>
                <Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => handleLogin("popup")}
                    color={'white'}
                    sx={{
                        paddingLeft:"35px"
                        
                    }}
                    >
                        LogIn
                    </Link>
                    <ColorButton
                    >
                        Sign Up
                    </ColorButton>
                </Box>
            </AppBar>

            </HideOnScroll>
        </div>
    );

}
export default Header;