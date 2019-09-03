import React from 'react';
import { Select, Icon, Menu, Dropdown,message } from 'antd';
import './index.less';
import { getStore } from '../../util/util';
import { MenuList, Ajax } from '../../types/globals';
const { Option, OptGroup } = Select;
interface IState {
  menuTreeNode: JSX.Element[] | null;
}
interface IProps {}
class Header extends React.Component<IProps, IState> {
  state: IState = {
    menuTreeNode: null,
  };
  componentDidMount() {
    let menuList = getStore('NAVIGATE_MENU');
    console.log(menuList);
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode,
    });
  }
  renderMenu = (menuList: MenuList) => {
    return menuList.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <OptGroup label={item.name} key={item.name}>
            {this.renderMenu(item.children)}
          </OptGroup>
        );
      }

      return (
        <Option value={item.route} key={item.route}>
          {item.name}
        </Option>
      );
    });
  };
  clearLocalstage = () => {
    message.success('清理成功');
  };
  
  filterOption = (input: string, option: any): any => {
    return option.props.children.indexOf(input) >= 0;
  };
  render() {
    const menus = (
      <Menu>
        <Menu.Item>
          <Icon type="unlock" />
          <span>修改密码</span>
        </Menu.Item>
        <Menu.Item>
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header-content">
        <img className="header-img" src={require('../../assets/bg/logo.png')} />
        <div className="header-search" id="area">
          <Select
            style={{ width: 180 }}
            placeholder="选择输入菜单"
            showSearch
            filterOption={this.filterOption}
            getPopupContainer={() =>
              document.getElementById('area') as HTMLElement
            }
          >
            {this.state.menuTreeNode}
          </Select>
        </div>
        <ul className="header-opera">
          <li  onClick={this.clearLocalstage}>
            <Icon type="close-square" />
            <span>清除缓存</span>
          </li>
          <li>
            <Icon type="user" />
            <Dropdown overlay={menus} placement="bottomRight">
              <span>张三丰</span>
            </Dropdown>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
