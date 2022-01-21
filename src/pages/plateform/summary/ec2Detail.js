import {React, useState, useEffect, useContext} from 'react';
import {
    CardHeader,
    Avatar,
    IconButton,
    Typography,
    CardContent,
    Card,
    Table, TableBody,
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TablePagination,
    Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StorageIcon from '@mui/icons-material/Storage';
import {red,} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { tableCellClasses  } from "@mui/material/TableCell";
import {Ec2CountDataContext} from './content';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const columns = [
  { id: 'instanceId', label: 'Instance ID', minWidth: 170 },
  { id: 'instanceType', label: 'Instance Type', minWidth: 100 },
  { id: 'ipAddress', label: 'IP Address', minWidth: 100 },
  { id: 'keyName', label: 'Key Name', minWidth: 100 },
  { id: 'lamInstanceProfile', label: 'Lam Instance Profile', minWidth: 170 },
  { id: 'abilityZone', label: 'Ability Zone', minWidth: 100 },
];

function createData(instanceId, instanceType, ipAddress, keyName, lamInstanceProfile, abilityZone) {
  return {instanceId, instanceType, ipAddress, keyName, lamInstanceProfile, abilityZone};
}


export default function Ec2Detail(prop) {
  const instanceData = useContext(Ec2CountDataContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [ec2data, setEc2Data] = useState([]);
  var rows = [];

  useEffect( () => {
    var data = instanceData.ec2instancedata;
    for(var i = 0; i < data.length; i++){
      rows.push(createData(data[i].instanceId, data[i].instance_type, data[i].ipv4, data[i].keyName, data[i].iamInstanceProfile, data[i].availability_zone));
    }
    setEc2Data(rows);
  },[instanceData.ec2instancedata]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
        <Card sx={{maxHeight:500, marginBottom:'100px', boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <StorageIcon/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={<Typography variant='h5'>Ec2 Count Detail</Typography>}
            />
            <CardContent>
                <Grid 
                    container 
                    spacing={1} 
                    direction={"column"} 
                    justifyContent={'flex-start'} 
                    alignItems={'center'}>
                    <Grid item lg={12} style={{width:'inherit'}}>
                        <TableContainer sx={{ maxHeight: 400 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <StyledTableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </StyledTableCell>
                                ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {ec2data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row,index) => {
                                    return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <StyledTableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                            </StyledTableCell>
                                        );
                                        })}
                                    </StyledTableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={ec2data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  );
}
