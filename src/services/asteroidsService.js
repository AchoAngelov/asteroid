import axios from 'axios';
import { NASA_API_KEY } from '../config/config';

export function getClosestAsteroids(params) {
    params.api_key = NASA_API_KEY;
    return axios.get('https://api.nasa.gov/neo/rest/v1/feed', { params });
}

export function getAsteroid(id) {
    const api_key = NASA_API_KEY;
    return axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}`, {
        params: { api_key },
    });
}
