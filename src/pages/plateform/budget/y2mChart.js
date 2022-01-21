import React, {useState, useEffect, useContext} from "react";
import { Bar} from "react-chartjs-2";
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    Typography,
    CardContent,
    Grid,
    Slider,
    Box
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {red,} from '@mui/material/colors';
import { ArcElement} from 'chart.js';
import Chart from 'chart.js/auto'
import BarChartIcon from '@mui/icons-material/BarChart';
import {BudgetDataContext} from './content';

Chart.register(ArcElement);
const origindata = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
  datasets: [
    {
      data: [],
      label: 'My First dataset',
      backgroundColor: '#EC932F',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    }
  ]
};
  function valuetext(value) {
    return `$${value}`;
  }

const M2dchart = () =>{
    
    const[chatdata, setChartData] = useState(origindata);
    const [value, setValue] = React.useState([20, 100]);
    const [max, setMax] = useState(0);
    const budgetData = useContext(BudgetDataContext);
    const [year, setYear] = useState(new Date().getFullYear());

    const handleChange = (event, newValue) => {
        var filterdata = [];
        origindata.datasets[0].data.forEach((value, index)=>{
          var i = checkCondition(value)? value:0;
          filterdata.push(i);
        })
        const statedata = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
            datasets: [
              {
                data: filterdata,
                label: year,
                backgroundColor: '#EC932F',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
              }
            ]
          };
        setChartData(statedata);
        setValue(newValue);
    };
    const checkCondition = (each) =>{
        var min = value[0];
        var max = value[1];
      return each >= min && each <= max;
    }
    

    useEffect(() => {
        var c_data = budgetData.y2mChartData;
        var rowData = [];
        for(var i = 0; i < c_data.length; i++){
          rowData[c_data[i].month-1] = c_data[i].cost;
        }
        for(var j = 0; j < 12; j++){
          if(!rowData[j]){
            rowData[j] = 0;
          }
        }
        const stateData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
          datasets: [
            {
              data: rowData,
              label: year,
              backgroundColor: '#EC932F',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
            }
          ]
        };
        setChartData(stateData);
        origindata.datasets[0].data = rowData;
        origindata.datasets[0].label = year;
        var max = Math.max(...rowData);
        setValue([0,max]);
        setMax(max);
    }, [budgetData]);
    return (
        
        <Card sx={{maxHeight:500, height:'500px', boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <BarChartIcon/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={<Typography variant='h5'>Year to Month Spend by Service</Typography>}
                
            />
            <CardContent>
                <Grid 
                    container 
                    spacing={1} 
                    direction={"column"} 
                    justifyContent={'flex-start'} 
                    alignItems={'center'}>
                    <Grid item lg={3} style={{width:'inherit'}}>
                        <Bar
                        data={chatdata}
                        />
                    </Grid>
                    <Box style={{width:'inherit'}} sx={{ width: 300, paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px'}}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            max={max}
                            getAriaValueText={valuetext}
                        />
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
  }

export default M2dchart;
