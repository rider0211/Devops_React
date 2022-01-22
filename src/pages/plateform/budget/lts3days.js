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
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {red,} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { tableCellClasses  } from "@mui/material/TableCell";
import {BudgetDataContext} from './content';

const getOnlyDate = (param) =>{
    var today = new Date();
    var dd = String(today. getDate() - param). padStart(2, '0');
    var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
    var yyyy = today. getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;
}

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
  { id: 'service',  label: 'Service',     minWidth: 170,  align: 'center'},
  { id: 'third',    label: getOnlyDate(3),  minWidth: 100,  align: 'center'},
  { id: 'second',   label: getOnlyDate(2),  minWidth: 170,  align: 'center'},
  { id: 'first',    label: getOnlyDate(1),  minWidth: 170,  align: 'center'},
  { id: 'total',    label: 'Total',       minWidth: 170,  align: 'center'},
];

function createData(service, third, second, first) {
  const total = third+second+first;
  return { service, third, second, first, total };
}
var rows = [];

export default function Lts3days() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [tableData, setTableData] = React.useState([]);
  const budgetData = React.useContext(BudgetDataContext);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect( () => {
    var data = budgetData.ltsData;
    setTableData(data);
    rows = data;
  },[budgetData]);
  
  return (
        <Card sx={{maxHeight:600, marginTop:'50px', marginBottom:'100px', boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <AttachMoneyIcon/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={<Typography variant='h5'>Cost by Service ($)</Typography>}
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
                                {tableData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row,index) => {

                                    return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {
                                        columns.map((column) => {
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
                            count={tableData.length}
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