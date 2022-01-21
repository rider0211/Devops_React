import * as React from 'react';
import {useState, useContext, useEffect} from 'react';
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
import DnsIcon from '@mui/icons-material/Dns';
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
  { id: 'region', label: 'Region', minWidth: 170 },
  { id: 'runningIns', label: 'Running Instance', minWidth: 100 },
  { id: 'stopIns', label: 'Stopping Instance', minWidth: 100 },
];

// function createData(_id, region, runningIns, stopIns) {
//   return {_id, region, runningIns, stopIns};
// }

export default function Ec2Table(props) {
  const countData = useContext(Ec2CountDataContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [tableRows, setTableRows] = useState([]);
  var rows = [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const createData = (_id, region, runningIns, stopIns) =>{
    return {_id, region, runningIns, stopIns};
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    var data = countData.ec2countdata;
    for(var i = 0; i < data.length; i++){
      rows.push(createData(data[i]._id, data[i].Region, data[i].Running, data[i].Stopped));
    }
    setTableRows(rows);
  },[countData.ec2countdata]);

  const renderData = () => {
    return tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
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
    });
  }
  return (
        <Card sx={{maxHeight:500, boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <DnsIcon/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={<Typography variant='h5'>Ec2 Count Table</Typography>}
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
                                {columns.map((column,index) => (
                                    <StyledTableCell
                                    key={index}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </StyledTableCell>
                                ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {renderData()}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={tableRows.length}
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
