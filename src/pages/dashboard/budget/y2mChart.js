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
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
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
    return `${value}°C`;
  }

const M2dchart = () =>{
    
    const[chatdata, setChartData] = useState(origindata);
    const [value, setValue] = React.useState([20, 50]);
    const [max, setMax] = useState(0);

    const handleChange = (event, newValue) => {
        var filterdata = origindata.datasets[0].data.filter(checkCondition);
        const statedata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                data: filterdata,
                label: 'My First dataset',
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
