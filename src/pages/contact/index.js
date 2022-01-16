import React, { useEffect, useState } from 'react';
import Header from '../header';
import Content from './content';
import Footer from '../footer';
import Box from '@mui/material/Box';

const Contact = () =>{
    const [winheight, setHeight] = useState(0);
    
    useEffect(() => {
        setHeight(document.body.scrollHeight - 48);
    }, [])
    return(
        <div
            style={{flexDirection: 'column', justifyContent:'space-between', alignItems:"stretch", flex: 1}}
        >
            <div style={{flex: 1, height: winheight+'px'}}>
                <Header />
                <Content />
            </div>
            <div style={{flex: 1}}>
                <Footer />
            </div>
        </div>

    );
}
export default Contact;