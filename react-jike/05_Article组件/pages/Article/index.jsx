import { Link } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useChannel } from '@/hooks/useChannel'
import { getArticleListAPI, delArticleAPI } from '@/apis/article'
import { useEffect, useState } from 'react'
import img404 from '@/assets/error.png'
import locale from 'antd/es/date-picker/locale/zh_CN'

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
  const pageSize = 5
  const { channels } = useChannel()
  const [ data, setData ] = useState([])
  const [ count, setCount ] = useState(0)
  const [ formData, setFormData ] = useState({
    status: '',
    channel_id: '',
    begin_pubdate: '',
    end_pubdate: '',
    page: '',
    per_page: pageSize
  })
  // 准备列数据
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => {
        switch (data) {
          case 0:
            return <Tag color="green">草稿</Tag>
          case 1:
            return <Tag color="green">待审核</Tag>
          case 2:
            return <Tag color="green">审核通过</Tag>
          default:
            break;
        }
      }
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              shape="circle"
              onClick={ handleDelete(data.id) }
              icon={<DeleteOutlined />}
            />
          </Space>
        )
      }
    }
  ]

  function handleDelete(id) {
    console.log('handleDelete');
    return async () => {
      await delArticleAPI(id)
      setFormData({
        ...formData,
        page: 1
      })
    }
  }

  function handleFinish(values) {
    setFormData({
      ...values,
      begin_pubdate: values.date[0].format('YYYY-MM-DD'),
      end_pubdate: values.date[1].format('YYYY-MM-DD')
    })
  }

  function handlePaginationChange(page) {
    console.log('page-----------', page);
    setFormData({
      ...formData,
      page,
    })
  }

  useEffect(() => {
    async function getList() {
      const res = await getArticleListAPI(formData)
      setData(res.data.data.results)
      setCount(res.data.data.total_count)
    }
    getList()
  }, [formData])

  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }} onFinish={handleFinish} >
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              style={{ width: 120 }}
            >
              {
                channels.map(item => <Option key={item.id} value={item.id}>{ item.name }</Option>)
              }
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/*        */}
      <Card title={`根据筛选条件共查询到 ${ count } 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={data} pagination={{
          pageSize: pageSize,
          total: count,
          onChange: handlePaginationChange
        }} />
      </Card>
    </div>
  )
}

export default Article