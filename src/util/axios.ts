import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';
import {signature} from './util';


const JSONbig = require("json-bigint");
const config = {
    //baseURL: "http://192.168.5.17:8001/back",
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://fune.store/back"
        : "http://localhost:8081/api",
    paramsSerializer: function(params: any):string {
      return qs.stringify(params);
    },
    timeout: 30000
  };
// 创建Axios实例
class Axios {
  public axios: any;
  constructor() {
    this.axios = axios.create(config);
    this.onRequest();
    this.onResponse();
  }
  private onRequest() {
    this.axios.interceptors.request.use((config: any) => {
      let LOGIN_TOKEN =Cookies.get('LOGIN_TOKIN');
      config.startTime = new Date().getTime();
      if (config.method=='get'){
        /* var data=qs.parse(config.data)
        data.timestamp=new Date().getTime()
        let signstr=signature(authToken,data)
        data.signature=signstr
        config.url=config.url+'?'+qs.stringify(data, { arrayFormat: 'repeat' } ) */
      }
      if(config.method=='post'){
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        config.data = qs.stringify(config.data) + "&signature=" + signature(LOGIN_TOKEN,qs.parse(config.data));
      }
      if (LOGIN_TOKEN) config.headers["accessToken"] = LOGIN_TOKEN;


      return config;
    });
  }
  private onResponse() {
    this.axios.interceptors.response.use(
      (response: any) => {
        //TODO 请求码500跳转自定义错误页面
        if (response.data.code == 1) {
          try {
            var data = JSONbig.parse(response.request.response);
            return data;
          } catch (e) {
            return response.data;
          }
        } else if (response.data.code == -401) {
        
          return response.data;
        } else {
        }
      },
      (err: any) => {
        console.log(`错误信息 ${err.message}`);
        return Promise.resolve(err.data);
      }
    );
  }
}

export default Axios;