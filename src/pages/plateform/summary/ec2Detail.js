import * as React from 'react';
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

const rows = [
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
  createData('i-0e2e36d7f1bc2f9f7', 't3.medium', '92.168.171.213', 'jupiter','arn:aws:iam::84914857:instance-profile/CustomerManaged','Us–east-1'),
];

export default function Ec2Detail() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
        <Card sx={{maxHeight:500, marginTop:'50px', marginBottom:'100px', boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
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
                                {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                            count={rows.length}
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
