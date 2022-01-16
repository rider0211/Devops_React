import {React} from 'react';
import {Box, Container, Typography,} from '@mui/material';

const ServiceSection = () =>{

    return(
        <div>
            <Box sx={{
                height : {lg:'1500px', xs:'1800px'},
                backgroundColor:'#fff',
                paddingTop:'80px',
                justifyContent:"space-between",
                alignItems:"stretch" }} >
                    <Container maxWidth='lg'>
                    <Box
                    sx={{
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                    >
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
                        </Typography>   
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                        </Typography>    
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </Typography> 
                        <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </Typography> 
                    </Box>
                    <Box display={'grid'} sx={{justifyContent:'center'}}>
                    <Box
                        component="img"
                        sx={{
                            justifyContent:'center'
                        }}
                        src="/static/img/about-01.png"
                        />
                    </Box>
                    <Typography fontFamily={'PT Serif, Georgia, serif'} variant='h6' paddingTop={'50px'}>
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    </Typography> 
                    <Box 
                    sx={{
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }} >
                        <Box display={'grid'} sx={{justifyContent:'center'}}>
                            <Box
                            component="img"
                            sx={{
                                justifyContent:'center'
                            }}
                            src="/static/img/about-02.png"
                            />
                        </Box>
                        <Box display={'grid'} sx={{justifyContent:'center'}}>
                            <Box
                            component="img"
                            sx={{
                                justifyContent:'center'
                            }}
                            src="/static/img/about-03.png"
                            />
                        </Box>
                    </Box>
                    </Container>
            </Box>
        </div>
    );

}
export default ServiceSection;