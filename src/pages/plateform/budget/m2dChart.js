import React, {useState, useEffect, useContext} from "react";
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
import {BudgetDataContext} from './content';

Chart.register(ArcElement);

const origindata = {
    labels: [""],
    
    datasets: [
      {
        data: [0],
        backgroundColor: [],
        hoverBackgroundColor: []
      }
    ],
  };
var options = {
  elements: {
    center: {
      text: "$0"
    }
  },
  responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    centerText: {
        display: true,
        text: `90%`
    },
    aspectRatio:'70%',
    cutout: "70%",
  };
const columns = [

    { 
        id: 'service',
        label: 'Service',
        align: 'center',},
    { 
        id: 'cost',
        label: 'Cost',
        align: 'center',},
  ];
  function createData(service, cost) {
    return { service, cost};
  }



  let originrows = [];

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
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
const M2dchart = () =>{

  var plugins = [{
    beforeDraw: function(chart) {
      var width = chart.width,
      height = chart.height,
      ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
      var text = chart.config.options.elements.center.text,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    } 
  }]

    const[chatdata, setChartData] = useState(origindata);
    const [value, setValue] = React.useState([0, 100]);
    const [max, setMax] = useState(0);
    const [tabledata, setTableData] = useState(originrows);
    const budgetData = useContext(BudgetDataContext);
    

    const handleChange = (event, newValue) => {
      var filterData = [];
      var labels = [];
      origindata.datasets[0].data.forEach((value, index)=>{
        var i = checkCondition(value)? value:0;
        filterData.push(i);
        labels.push(origindata.labels[index]);
      })
      var backgroundColor = [];
      var hoverBackgroundColor = [];
      var sum = 0;
      for(var i = 0; i < filterData.length; i++){
        sum += filterData[i];
        backgroundColor.push(getRandomColor());
        hoverBackgroundColor.push(getRandomColor());
      }

      sum = Number((sum).toFixed(2));

      options.elements.center.text = '$' + sum;

      const statedata = {
          labels: labels,
          datasets: [
            {
              data: filterData,
              backgroundColor: backgroundColor,
              hoverBackgroundColor: hoverBackgroundColor
            }
          ]
        };
      setChartData(statedata);
      var filterTblData = originrows.filter(checkTblCondition);
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
    return each.cost >= min && each.cost <= max;
  }
    

    useEffect(() => {
        originrows = [];
        var data = budgetData.m2dChartData;
        var cost = [];
        var services = [];
        var backgroundColor = [];
        var hoverBackgroundColor = [];
        var sum = 0;
        for (var i = 0; i < data.length; i++){
          sum += data[i].cost;
          cost.push(data[i].cost);
          services.push(data[i].service);
          backgroundColor.push(getRandomColor());
          hoverBackgroundColor.push(getRandomColor());
        }
        origindata.labels = services;
        origindata.datasets[0].data = cost;
        origindata.datasets[0].backgroundColor = backgroundColor;
        origindata.datasets[0].hoverBackgroundColor = hoverBackgroundColor;

        const statedata = {
          labels: services,
          datasets: [
            {
              data: cost,
              backgroundColor: backgroundColor,
              hoverBackgroundColor: hoverBackgroundColor
            }
          ],
        };
        setChartData(statedata);

        for(var j = 0; j < data.length; j++){
          originrows.push(createData(services[j], cost[j]));
        }
        setTableData(originrows);
        
        sum = Number((sum).toFixed(2));

        options.elements.center.text = '$' + sum;

        var tempdata = statedata.datasets[0].data;
        var max = Math.max(...tempdata);
        setValue([0, max]);
        setMax(max);
    }, [budgetData]);
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
                        <Doughnut data={chatdata} options={options} plugins={plugins}/>
                    </Grid>
                    <Box style={{width:'inherit'}} sx={{ width: 300, paddingLeft:'20px', paddingRight:'20px' }}>
                        <Slider
                            getAriaLabel={() => 'cost range'}
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
                        {tabledata.map((row,index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <StyledTableCell align="center">{row.service}</StyledTableCell>
                            <StyledTableCell align="center">${row.cost}</StyledTableCell>
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
