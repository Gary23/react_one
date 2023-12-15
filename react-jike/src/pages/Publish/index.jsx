import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom'
import { fetchCreeateArticlesApi, fetchChannelsApi } from '@/apis/article'
import 'react-quill/dist/quill.snow.css';
import './index.scss'

const { Option } = Select

const Publish = () => {
  const [form] = Form.useForm();
  const [ channels, setChannels ] = useState([])
  const [ fileList, setFileList ] = useState([])

  function handleFinish(values) {
    console.log(values);
    const { title, channel_id, content, type } = values
    fetchCreeateArticlesApi({
      title,
      content,
      channel_id,
      cover: {
        type: type,
        images: fileList
      }
    }).then(res => {
      message.success('发布成功')
      console.log(res)
      form.resetFields()
    }).catch(err => {
      console.log(err);
      message.error('发布失败')
    })
  }

  function handleUploadChange(value) {
    console.log('upload change', value);
    if (value.file.status === 'done') {
      setFileList(value.fileList)
    }
  }

  useEffect(() => {
    fetchChannelsApi().then(res => {
      console.log(res);
      setChannels(res.data.data.channels)
    })
  }, [])

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {
                channels.map(item => <Option key={item.id} value={item.id}>{ item.name }</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            <Upload
              listType="picture-card"
              showUploadList
              name="image"
              action="http://geek.itheima.net/v1_0/upload"
              onChange={ handleUploadChange }
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <ReactQuill className="publish-quill" placeholder="请输入文章内容" theme="snow" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish