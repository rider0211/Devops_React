import axios from 'axios';
import { browserHistory } from 'react-router';
const jwt_decode = require('jwt-decode');

const ROOT_URL = 'http://localhost:3090';

export function getEc2Count(res) {
    var data;
    axios.post(`${ROOT_URL}/plateform/getAllEc2Count`)
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
    return data;
  }
export function getEc2instance(res) {
var data;
axios.post(`${ROOT_URL}/plateform/getAllEc2Instance`)
.then(response => {
    res({data: response});
})
.catch(() => {
});
return data;
}
export function getM2dData(res, month){
    const d = new Date();

    if(!month){
        month = d.getMonth()+1;
    }
    axios.post(`${ROOT_URL}/budget/getM2dDataByMonth`,{month: month})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
export function getY2mData(res, year){
    const d = new Date();
    if(!year){
        year = d.getFullYear();
    }
    axios.post(`${ROOT_URL}/budget/getY2mGetData`,{year: year})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
export function getLtsData(res, month){
    const d = new Date();
    
    axios.post(`${ROOT_URL}/budget/getLtsData`,{month: month})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
