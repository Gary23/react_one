import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/redux/modules/userStore'
import { Card, Form, Input, Button, message } from 'antd'
// import logo from '@/assets/logo.png'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  async function handleFinish (values) {
    // body
    console.log('finish',  values)
    try {
      await dispatch(fetchLogin(values))
      navigate('/layout')
      message.success('登录成功')
    } catch (error) {
      message.error('登录失败')
      console.log(error);
    }
  }
  return (
    <div className="login">
      <Card className="login-container">
        {/* <img className="login-logo" src={logo} alt="" /> */}
        {/* 登录表单 */}
        <Form
          validateTrigger="onBlur"
          onFinish={handleFinish}
        >
          <Form.Item 
            name="mobile" 
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1\d{10}$/, message: '手机号格式错误'},
            ]}>
            <Input size="large" placeholder="请输入手机号"  />
          </Form.Item>
          <Form.Item
            name="code" 
            rules={[
              { required: true, message: '请输入验证码' }
            ]}>
            <Input size="large" placeholder="请输入验证码" maxLength="6" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login