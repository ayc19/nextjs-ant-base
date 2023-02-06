import axios from 'axios';

export async function getMessage() {
    return axios.get('http://localhost:4000');
}