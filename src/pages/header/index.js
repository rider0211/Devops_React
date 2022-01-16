import React from 'react';
import { Button, Breadcrumbs, Link, Typography,} from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { blue, grey } from '@mui/material/colors';
import Pagemenu from './menu';
import Profile from './profile';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.primary,
  backgroundColor:'#fff',
  height:'50px',
  borderBlockEnd:'solid 1px #ddd'
}));

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: blue[100],
    fontSize: '11px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:blue[700],
    '&:hover': {
        color: grey[50],
        backgroundColor: blue[100],
    },
    }));

const header = () =>{
    var fontsize = {
        fontSize : '17px'
    };
    return (
        <div style={{width:'100%'}}>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={0}
            >
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    bgcolor: 'background.flex',
                    p:1,
                    backgroundColor:'#fff',
                    borderBlockEnd:'solid 1px #ddd',
                    justifyContent:"space-between",
                    alignItems:"stretch"
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: '73px',
                                width: '120px',
                                paddingLeft:'20px'
                            }}
                            src="/static/img/favicon.svg"
                        />
                        <Box
                            sx={{
                                marginTop:'20px',
                                marginLeft:'20px'
                            }}
                        >
                            <Pagemenu />
                        </Box>
                    </Box>
                    <Box sx={{marginTop:'20px'}}>
                        <Profile />
                    </Box>
                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    bgcolor: 'background.flex',
                    boxShadow:'0px 10px 30px 0px rgb(82 63 105 / 8%)',
                    p:2,
                    paddingLeft:'25px',
                    paddingRight:'25px',
                    backgroundColor:'#fff',
                    justifyContent: 'space-between'
                    }}
                >
                    <Breadcrumbs aria-label="breadcrumb" style={fontsize}>
                        <Link underline="hover" color="black" href="/" style={fontsize}>
                            Support
                        </Link>
                        <Typography color="text.primary" style={fontsize}>Team Contact</Typography>
                    </Breadcrumbs>
                    <ColorButton variant="contained"  >Add Contact</ColorButton>
                </Box>
            </Stack>
        </div>
    );

}
export default header;