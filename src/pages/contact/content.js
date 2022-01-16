import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import {InputAdornment, 
    Button, 
    Box, 
    OutlinedInput, 
    Table, TableBody,
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    IconButton,
    FormControl,} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';


  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: blue[100],
    fontSize: '13px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:blue[700],
    '&:hover': {
        color: grey[50],
        backgroundColor: blue[100],
    },
    marginLeft:'10px',
    textTransform:'none'
    }));

    const columns = [
        { 
            id: 'no',
            label: 'No',
            align: 'center',},
        { 
            id: 'name',
            label: 'Name',
            align: 'center',},
        { 
            id: 'ntid',
            label: 'NTID',
            align: 'center',},
        {
          id: 'email',
          label: 'EMAIL',
          align: 'center',
        },
        {
          id: 'phonenumber',
          label: 'PHONE NUMBER',
          align: 'center',
        },
        {
          id: 'timezone',
          label: 'TIME ZONE',
          align: 'center',
        },
        {
          id: 'location',
          label: 'LOCATION',
          align: 'center',
        },
        {
            id: 'action',
            label: 'Action',
            align: 'center',
          },
      ];
      function createData(name, ntid, email, phonenumber, timezone, location) {
        return { name, ntid, email, phonenumber, timezone, location };
      }

      const rows = [
        createData('Pizza', '0000-00-00', 'pizza@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),
        createData('Sandwitch', '1236-05-00', 'sandwitch@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),
        createData('Toast', '1234-00-00', 'toast@gmail.com', '01-222-5555', 'UTC+8', 'Arkansas'),

      ];
const Content = () =>{
    var i = 1;
    return(
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#fff', height: '100%',width:'100%', marginTop:'30px',marginBottom:'30px', boxShadow:'0px 0px 30px 0px rgb(82 63 105 / 5%)'}}>
                <Box sx={{p:4}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            p:2,
                        }}
                    >
                        <div className="input-icon">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <span>
                                <SearchSharpIcon color="disabled"/>
                            </span>
                        </div>
                        <ColorButton
                        >
                            Search
                        </ColorButton>
                    </Box>
                    <Box sx={{p:2}}>
                        
                    <TableContainer sx={{backgroundColor:'#fff'}}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center">{i}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.ntid}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phonenumber}</TableCell>
                            <TableCell align="center">{row.timezone}</TableCell>
                            <TableCell align="center">{row.location}</TableCell>
                            <TableCell align="center">
                                <IconButton color="primary"><DeleteIcon/></IconButton>
                                <IconButton color="primary"><BorderColorSharpIcon/></IconButton>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
export default Content;
