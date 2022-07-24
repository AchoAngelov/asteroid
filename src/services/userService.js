import axios from 'axios';
import { FIREBASE_API_KEY } from '../config/config';

export function signIn(params) {
    params.returnSecureToken = true;
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        { ...params }
    );
}

export function signUp(params) {
    params.returnSecureToken = true;
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
        { ...params }
    );
}
