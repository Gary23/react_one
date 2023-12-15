import { useEffect } from 'react'
import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { fetchUserInfo, setUserInfo, setToken } from '@/redux/modules/userStore'
import { storage } from '@/utils'
import './index.scss'

const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/layout/home',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/layout/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/layout/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pathName = location.pathname
  const { userInfo } = useSelector(state => state.user)
  console.log(userInfo);

  function handleMenuClick({ key }) {
    navigate(key)
  }

  function handleConfirm() {
    setToken('')
    setUserInfo({})
    storage.remove('token')
    navigate('/login')
  }

  useEffect(() => {
    async function getUserInfo () {
      // body
      try {
        await dispatch(fetchUserInfo())
      } catch (error) {
        console.log(error);
      }
    }
    getUserInfo()
  }, [dispatch])

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{ userInfo.name }</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={ handleConfirm }>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['/layout/home']}
            selectedKeys={[pathName]}
            items={items}
            onClick={ handleMenuClick }
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout