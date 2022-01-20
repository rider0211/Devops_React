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
import {Ec2CountDataContext} from './content';
Chart.register(ArcElement);

const origindata = {
  labels: ["Missing Data. Please check server..."],
  datasets: [
    {
      data: [],
      label: 'Running Instance',
      backgroundColor: '#EC932F',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      data: [],
      label: 'Stopping Instance',
      backgroundColor: '#F44336',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    }
  ]
};
  function valuetext(value) {
    return `${value}°C`;
  }

const Ec2Graph = () =>{
    
    const[chatdata, setChartData] = useState(origindata);
    const [value, setValue] = React.useState([20, 50]);
    const [max, setMax] = useState(0);

    const ec2countdata = useContext(Ec2CountDataContext);
    const handleChange = (event, newValue) => {
        var filterRunningdata = [];
        var filterStoppingdata = [];
        origindata.datasets[0].data.forEach((value, index)=>{
          var i = checkCondition(value)? value:0;
          filterRunningdata.push(i);
        })
        origindata.datasets[1].data.forEach((value, index)=>{
          var j = checkCondition(value)? value:0;
          filterStoppingdata.push(j);
        })
        var label = origindata.label;
        const statedata = {
            labels: label,
            datasets: [
              {
                data: filterRunningdata,
                label: 'Running Instance',
                backgroundColor: '#EC932F',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
              },
              {
                data: filterStoppingdata,
                label: 'Stopping Instance',
                backgroundColor: '#F44336',
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
      var label = [];
      var runnig = [];
      var stopped = [];
          var data = ec2countdata.ec2countdata;
          for (var i = 0; i < data.length; i++){
            label.push(data[i].Region);
            runnig.push(data[i].Running);
            stopped.push(data[i].Stopped);
          }

          const statedata = {
            labels: label,
            datasets: [
              {
                data: runnig,
                label: 'Running Instance',
                backgroundColor: '#EC932F',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
              },
              {
                data: stopped,
                label: 'Stopping Instance',
                backgroundColor: '#F44336',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
              }
            ]
          };
          setChartData(statedata);
          origindata.label = label;
          origindata.datasets[0].data = runnig;
          origindata.datasets[1].data = stopped;

          var runningdata = origindata.datasets[0].data;
          var stoppeddata = origindata.datasets[1].data;

          var runningmax = Math.max(...runningdata);
          var stoppedmax = Math.max(...stoppeddata);

          var max = runningmax>stoppedmax? runningmax:stoppedmax;
          setMax(max);

    },[ec2countdata]);
    return (
        
        <Card sx={{ boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
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
                title={<Typography variant='h5'>Ec2 Count Graph</Typography>}
                
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

export default Ec2Graph;
