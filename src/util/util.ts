import Cryptojs from 'crypto-js';
/* const live: <T>(arg: T) => T = (t)=>{
    return t;
}; */

interface AsObject {
  [key: string]: any;
}
const signature = (token: string, data: AsObject):string => {
  // 签名格式： timestamp + token + data(字典升序)
  let ret:Array<any> = [];
  for (let it in data) {
    let val = data[it];
    if (
      typeof val === 'object' &&
      (!(val instanceof Array) ||
        (val.length > 0 && typeof val[0] === 'object'))
    ) {
      val = JSON.stringify(val);
    }
    ret.push(it + val);
  }
  // 字典升序
  ret.sort();
  let signstr = token + ret.join('');
  return Cryptojs.MD5(signstr).toString();
};

//添加localStorage
const setStore = (key: string, value: any) => {
  if (!key) return;
  let curTime: number = new Date().getTime();
  value = JSON.stringify({ data: value, time: curTime });
  window.localStorage.setItem(key, value);
};
const getStore = (key: string, exp = Number.MAX_VALUE): any => {
  if (!key) return false;
  let data: string | null = window.localStorage.getItem(key);
  let dataObj, dataObjDatatoJson: string | null;
  if (data) {
    dataObj = JSON.parse(data);
    if (new Date().getTime() - dataObj.time > exp) {
      let dataObjDatatoJson = "timeOut";
      return dataObjDatatoJson;
    } else {
      dataObjDatatoJson = dataObj.data;
      return dataObjDatatoJson;
    }
  } else {
    return;
  }
};

export {signature,setStore,getStore};
