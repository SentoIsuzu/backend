import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


moment.locale('zh-cn');
ReactDOM.render( <LocaleProvider locale={zh_CN}><App /></LocaleProvider>, document.getElementById('root'));

serviceWorker.unregister();
