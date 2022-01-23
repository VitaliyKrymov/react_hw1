import {axiosServise} from "./axios.servise";

const userServise={
    getAll:()=>axiosServise.get('/users').then(value=>value.data),
    create:(user)=>axiosServise.post('/users',user)
}
