import axios from 'axios';
import {API_KEY} from './../common/config'
export function getClosestAsteroids(params){
  params.api_key = API_KEY
  return axios.get('https://api.nasa.gov/neo/rest/v1/feed', {params});
};