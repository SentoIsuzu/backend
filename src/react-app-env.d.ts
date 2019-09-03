// / <reference types="react-scripts" />
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// 带 store 组件
declare interface IStore {
    //store?: Store;
}
//默认的props
declare interface IProps  {}

//默认的state
declare interface IState {}

// 路由页面组件
declare interface IRoute<P = {}> extends RouteComponentProps<P> {}


// 默认带 store 页面组件
declare interface IPage<P = {}> extends IRoute<P>, IStore {}

declare interface MenuItem{
    title:string;
    key:string;
    children?:Array<MenuItem>
}
declare type MenuList=Array<MenuItem>
declare module "qs" {
    const qs: any;
    export default qs;
    }