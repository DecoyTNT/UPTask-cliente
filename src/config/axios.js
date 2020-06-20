import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://uptasknode.herokuapp.com/'
});

export default clienteAxios;