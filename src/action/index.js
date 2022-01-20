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
  