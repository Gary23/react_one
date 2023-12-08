import { Outlet } from 'react-router-dom'
import { Button } from 'antd-mobile'

function Layout() {
  console.log('layout----render------');
  return (
    <div>
      Layout
      <Button color="primary">layout</Button>
      <Outlet />
    </div>
  )
}

export default Layout