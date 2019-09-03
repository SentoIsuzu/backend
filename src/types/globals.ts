// / <reference types="react-scripts" />
//import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export namespace global {
  // 带 store 组件
}
export interface IStore {
  //store?: Store;
}
//默认的props
export interface IProps {}

//默认的state
export interface IState {}

// 路由页面组件
export interface IRoute<P = {}> extends RouteComponentProps<P> {}

// 默认带 store 页面组件
export interface IPage<P = {}> extends IRoute<P>, IStore {}

export interface MenuItem {
  title: string;
  key: string;
  children?: Array<MenuItem>;
  name:string;
  sort:number;
  status:number;
  path:number;
  route:string;
}
export type MenuList = Array<MenuItem>;

export declare namespace Ajax {
  // 请求接口数据
  export interface AxiosResponse {
    data: AjaxResponse;
  }
  export interface AjaxResponse {
    code: number;
    data: any;
    msg: string;
  }
}