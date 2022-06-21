import axios,{AxiosResponse} from "taro-axios";



const axiosInstance = axios.create({})

axiosInstance.interceptors.response.use((res):AxiosResponse<any>=>{
    return JSON.parse(res.data)
})

export default axiosInstance