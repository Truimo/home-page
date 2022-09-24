import axios from "axios";


const instance = axios.create({
    withCredentials: false
})

export default instance
