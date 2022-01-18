import React, {useState, useEffect} from "react";
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

Chart.register(ArcElement);
const origindata = {
  labels: ['us-east-1', 'us-east-2', 'us-east-3', 'us-west-1', 'us-west-2', 'us-west-3'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55],
      label: 'Running Instance',
      backgroundColor: '#EC932F',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      data: [35, 49, 20, 19, 44, 45],
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

    const handleChange = (event, newValue) => {
        var filterRunningdata = origindata.datasets[0].data.filter(checkCondition);
        var filterStoppingdata = origindata.datasets[1].data.filter(checkCondition);
        const statedata = {
            labels: ['us-east-1', 'us-east-2', 'us-east-3', 'us-west-1', 'us-west-2', 'us-west-3'],
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
        var data = chatdata.datasets[0].data;
        var max = Math.max(...data);
        setMax(max);
    }, [])
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
