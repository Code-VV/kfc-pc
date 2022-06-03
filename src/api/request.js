import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
    baseURL: '/api',
    timeout: 100000
})

// 请求拦截
service.interceptors.request.use(config => {
    //请求头设置
    if(localStorage.getItem('user')){
        let token = JSON.parse(localStorage.getItem('user')).token || ''
        let userId = JSON.parse(localStorage.getItem('user')).id || ''
    //     let token =cookies.get('token') || ''
     
    //     config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义token 请根据实际情况自行修改
        if(token && userId){
            config.headers['token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
            config.headers['userId'] = userId // 让每个请求携带自定义token 请根据实际情况自行修改
        }
    }
  
  
    return config
}, err => {
    console.log(err);
})
//响应拦截器
service.interceptors.response.use(response=>{
    //    console.log(response.config.headers['Authorization'])
        // if (response.config.headers['Authorization']) {
        //         cookies.set('token',response.config.headers['Authorization'])   //更新token
        //   }
// errorCode: "SYS.0015"
          return response;
    },(error) => {
            console.log('22222222222222222')
        if(error.response.data.errorCode == 'SYS.0015'){
            location.href = '/reg'
            localStorage.clear()
        }

console.log(error)
        return Promise.reject(error);
      })
export default service