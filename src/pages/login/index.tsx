import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import './index.less';
interface IProps {
  a?: string;
}

class Login extends Component<IProps & FormComponentProps> {
    
  render() {
    const { getFieldDecorator } = this.props.form;
    return(
        <div className="particles">
            <div className="login">
                `````
            </div>
        </div>
    );
  }
}
export default Form.create<IProps & FormComponentProps>()(Login);
