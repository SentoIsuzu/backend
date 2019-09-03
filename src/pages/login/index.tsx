import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { RouteComponentProps } from "react-router-dom";
import { FormComponentProps } from 'antd/lib/form/Form';
import Particles from 'react-particles-js';
import config from './partocle.js';
import LoginApi from '../../api/login';
import Cryptojs from 'crypto-js';
import {setStore} from "../../util/util"
import './index.less';

const FormItem = Form.Item;
interface ILoginProps extends FormComponentProps,RouteComponentProps<any> {
  
}
interface Istate {
  value: string;
  defaultType: boolean;
}
class LoginForm extends Component<ILoginProps, Istate> {
  readonly state: Readonly<Istate> = {
    value: '',
    defaultType: false,
  };
  hasErrors = (fieldsError: any) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  login = async () => {
    let fieldsValue = this.props.form.getFieldsValue();
    let data={username:'',...fieldsValue,password:Cryptojs.MD5(fieldsValue.password).toString()};
    
    let res:any = await LoginApi.login(data);
    if(res.code===1){
      setStore('USER_INFO',{
        name:res.data.username,
        role:{
          code:res.data.roles[0].code,
          name:res.data.roles[0].name
        }
      })
      setStore('NAVIGATE_MENU',res.data.menus);
      const { history } = this.props;
      history.push('/');
    }
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;
    const { defaultType } = this.state;
    const usernameError =
      isFieldTouched('username') && getFieldError('username');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    return (
      <div className="particles">
        <Particles params={config as any} />
        <div className="login">
          <div className="login-top">D2C赋能店</div>
          <div className="login-center">
            <FormItem
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请填写账号' }],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  size="large"
                  placeholder="请输入账号"
                />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  size="large"
                  type={defaultType ? 'password' : 'text'}
                  placeholder="请输入密码"
                />
              )}
            </FormItem>
            <Button
              type="primary"
              htmlType="button"
              className="login-button"
              size="large"
              disabled={this.hasErrors(getFieldsError())}
              onClick={this.login}
            >
              登录
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Form.create<ILoginProps>()(LoginForm);
