import axios from 'axios';

const baseURL = () => "https://leilao-rest-api.herokuapp.com/";

const clientHttp = axios.create({
    baseURL: baseURL(),
    headers: {
        "Content-type": "application/json"
    }
});

export default clientHttp;