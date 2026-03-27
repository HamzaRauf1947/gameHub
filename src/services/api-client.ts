import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'e8c1d5f50c4f445a86171eea8c91d998'
    }
})