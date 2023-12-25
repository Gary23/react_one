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
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { fetchCreeateArticlesApi, getArticleAPI } from '@/apis/article'
import { useChannel } from '@/hooks/useChannel'
import 'react-quill/dist/quill.snow.css';
import './index.scss'

const { Option } = Select

const Publish = () => {
  const navigator = useNavigate
  const [form] = Form.useForm();
  const [ fileList, setFileList ] = useState([])
  const [ coverType, setCoverType ] = useState(0)
  const { channels } = useChannel()
  const [ articleForm, setArticleForm ] = useState({})
  const [ searchParams ] = useSearchParams()
  const id = searchParams.get('id');

  function handleFinish(values) {
    console.log(values);
    const { type } = values
    if (fileList.length !== type) {
      message.error('请上传正确数量的图片')
      return
    }

    if (id) {
      updateArticle(values)
    } else {
      createrArticle(values)
    }
  }

  function updateArticle(values) {
    console.log('values--------', values);
    const { title, channel_id, content, type } = values
    fetchCreeateArticlesApi({
      id,
      title,
      content,
      channel_id,
      pub_date: articleForm.pub_date,
      cover: {
        type: type,
        images: fileList.map(item => item.response ? item.response.data.url : item.url)
      }
    }).then(res => {
      message.success('修改成功')
      console.log(res)
      setFileList([]) 
      setCoverType(0)
      form.resetFields()
      navigator('/layout/article')
    }).catch(err => {
      console.log(err);
      message.error('修改失败')
    })
  }

  function createrArticle(values) {
    const { title, channel_id, content, type } = values
    fetchCreeateArticlesApi({
      title,
      content,
      channel_id,
      cover: {
        type: type,
        images: fileList.map(item => item.response ? item.response.data.url : item.url)
      }
    }).then(res => {
      message.success('发布成功')
      console.log(res)
      setFileList([]) 
      setCoverType(0)
      form.resetFields()
    }).catch(err => {
      console.log(err);
      message.error('发布失败')
    })
  }

  function handleUploadChange({ fileList: newFileList }) {
    console.log('handleUploadChange', newFileList);
    setFileList(newFileList)
  }

  function handleRadioChange({ target }) {
    console.log('handleRadioChange', target);
    const { value } = target
    setFileList([])
    setCoverType(value)
  }

  useEffect(() => {
    if (id) {
      getArticleAPI(id).then(res => {
        form.setFieldsValue(res.data.data)
        form.setFieldValue('type', res.data.data.cover.type)
        setArticleForm(res.data.data)
        setCoverType(res.data.data.cover.type)
        setFileList(res.data.data.cover.images.map(item => ({ url: item })))
      })
    }
  }, [id, form])

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
          initialValues={{ type: 0 }}
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
              <Radio.Group onChange={ handleRadioChange }>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {
              coverType > 0 && (
                <Upload
                  listType="picture-card"
                  fileList={ fileList }
                  showUploadList
                  name="image"
                  maxCount={ coverType }
                  action="http://geek.itheima.net/v1_0/upload"
                  onChange={ handleUploadChange }
                >
                  <div style={{ marginTop: 8 }}>
                    <PlusOutlined />
                  </div>
                </Upload>
              )
            }
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