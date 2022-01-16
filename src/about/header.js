import {React} from 'react';
import {Box, AppBar, Link, CssBaseline, useScrollTrigger, Slide} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Profile from '../pages/header/profile';
import PropTypes  from 'prop-types';


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
                        navigate('/knowledge');
                    }}
                    color={'black'}
                    sx={{
                        paddingLeft:"35px"
                    }}
                    >
                        Knowledge base
                    </Link>
                    <Link
                    component="button"
                    variant="body3"
                    underline='none'
                    onClick={() => {
                        navigate('/support');
                    }}
                    color={'black'}
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
                        navigate('/support');
                    }}
                    color={'black'}
                    sx={{
                        paddingLeft:"35px"
                        
                    }}
                    >
                        Plateform
                    </Link>
                </Box>
                <Box sx={{marginTop:'20px', marginRight:'20px'}}>
                    <Profile />
                </Box>
            </AppBar>
            </HideOnScroll>
        </div>
    );

}
export default Header;