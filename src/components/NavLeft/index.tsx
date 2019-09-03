import React from 'react';
import { Menu } from 'antd';
import menuList from '../../config/menu';
import { NavLink } from 'react-router-dom';
import { MenuList, Ajax } from '../../types/globals';
import { getStore } from '../../util/util';
import './index.less';
const { SubMenu } = Menu;
interface IState {
  menuTreeNode: JSX.Element[] | null;
}
interface IProps {}

class NavLeft extends React.Component<IProps, IState> {
  state: IState = {
    menuTreeNode: null,
  };
  renderMenu = (menuList: MenuList) => {
    return menuList.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.name} key={item.route}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.name} key={item.route}>
          <NavLink to={item.route}>{item.name}</NavLink>
        </Menu.Item>
      );
    });
  };
  componentDidMount() {
    let menuList = getStore('NAVIGATE_MENU');
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode,
    });
  }
  render() {
    return (
      <div>
        <Menu theme="light" mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
