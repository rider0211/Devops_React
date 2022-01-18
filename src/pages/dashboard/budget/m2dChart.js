import React, {useState, useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    Typography,
    CardContent,
    Grid,
    Table, TableBody,
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Slider,
    Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses  } from "@mui/material/TableCell";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {red,} from '@mui/material/colors';
import {Chart, ArcElement} from 'chart.js';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

Chart.register(ArcElement);
const origindata = {
    labels: ["Red", "Green", "Yellow", "Color 1", "Color 2", "Color 3"],
    
    datasets: [
      {
        data: [300, 50, 100, 20, 80, 200],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#db3d44",
          "#4257b2",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#4257b2",
          "#36A2EB",
          "#FFCE56",
          "#db3d44",
          "#4257b2",
          "#36A2EB"
        ]
      }
    ]
  };
const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    aspectRatio:'70%',
    cutout: "50%",
  };
const columns = [

    { 
        id: 'color',
        label: 'Color',
        align: 'center',},
    { 
        id: 'value',
        label: 'Value',
        align: 'center',},
  ];
  function createData(color, value) {
    return { color, value};
  }

  const originrows = [
    createData('red', 300),
    createData('green', 50),
    createData('yellow', 100),
    createData('color 1', 20),
    createData('color 2', 80),
    createData('color 3', 200),
  ];

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#000",
      color: "#fff",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  function valuetext(value) {
    return `${value}°C`;
  }

const M2dchart = () =>{
    
    const[chatdata, setChartData] = useState(origindata);
    const [value, setValue] = React.useState([20, 50]);
    const [max, setMax] = useState(0);
    const [tabledata, setTableData] = useState(originrows)

    const handleChange = (event, newValue) => {
        var filterdata = origindata.datasets[0].data.filter(checkCondition);
        var filterTblData = originrows.filter(checkTblCondition);
        const statedata = {
            labels: ["Red", "Green", "Yellow", "Color 1", "Color 2", "Color 3"],
            
            datasets: [
              {
                data: filterdata,
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#db3d44",
                  "#4257b2",
                  "#FFCE56"
                ],
                hoverBackgroundColor: [
                  "#4257b2",
                  "#36A2EB",
                  "#FFCE56",
                  "#db3d44",
                  "#4257b2",
                  "#36A2EB"
                ]
              }
            ]
          };
        setChartData(statedata);
        setTableData(filterTblData);
        setValue(newValue);
    };
    const checkCondition = (each) =>{
        var min = value[0];
        var max = value[1];
      return each >= min && each <= max;
    }
    const checkTblCondition = (each) =>{
      var min = value[0];
      var max = value[1];
    return each.value >= min && each.value <= max;
  }
    

    useEffect(() => {
        var data = chatdata.datasets[0].data;
        var max = Math.max(...data);
        setMax(max);
    }, [])
    return (
        
        <Card sx={{maxHeight:500, boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <DonutLargeIcon/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={<Typography variant='h5'>Month to Date Spend by Service</Typography>}
                
            />
            <CardContent>
                <Grid 
                    container 
                    spacing={1} 
                    direction={"column"} 
                    justifyContent={'flex-start'} 
                    alignItems={'center'}>
                    <Grid item lg={3}>
                        <Doughnut data={chatdata} options={options}/>
                    </Grid>
                    <Box style={{width:'inherit'}} sx={{ width: 300, paddingLeft:'20px', paddingRight:'20px' }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            max={max}
                            getAriaValueText={valuetext}
                        />
                    </Box>
                    <Grid item lg={9} style={{width:'inherit'}}>
                    <TableContainer sx={{backgroundColor:'#fff',maxHeight: 200,}}>
                        <Table stickyHeader sx={{ minWidth: 350 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </StyledTableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {tabledata.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <StyledTableCell align="center">{row.color}</StyledTableCell>
                            <StyledTableCell align="center">{row.value}</StyledTableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
  }

export default M2dchart;
