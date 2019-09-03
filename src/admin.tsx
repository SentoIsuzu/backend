import React from 'react';
import { Layout} from 'antd';
import Headers from './components/Header';
import NavLeft from './components/NavLeft';
import './style/common.less';
const { Header, Sider,Content } = Layout;


//import Footer from './components/Footer'


const Admin: React.FC = (props) => {
  return (
    <div>
        <Layout className="main-layout">
          <Header className="header">
            <Headers />
          </Header>
					<Layout>
					<Sider width={200} style={{ background: '#fff' }} className="nav-left">
            <NavLeft />
					</Sider>
						
          <Layout style={{ padding: '0 24px 24px' }}>
          <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         的撒                阿萨德萨芬第三方撒旦法水电费是的发生的仿盛大发的发
        </Content>
          </Layout>
          </Layout>
        </Layout>
      </div>
  );
}

export default Admin;
