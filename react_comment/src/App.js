import { useState, useRef, useEffect } from 'react'
import className from 'classnames'
import dayjs from 'dayjs'
import _ from 'loadsh'
import { v4 } from 'uuid'
import axios from 'axios'
import './App.scss'

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]
// 封装获取数据的逻辑并抛出数据
function useGetData() {
  const [ commentList, setCommentList ] = useState([])
  const [ user, setUser ] = useState({})
  useEffect(() => {
    axios.get('http://localhost:3004/getList').then(r => {
      setCommentList(_.orderBy(r.data.list, 'like', 'desc'))
    })
    axios.get('http://localhost:3004/getUserInfo').then(r => {
      setUser(r.data)
    })
  }, [])

  return {
    commentList,
    setCommentList,
    user
  }
}

// 封装评论组件
function Item({ item, onDel, user }) {
  function handleDeleteComment(rpid) {
    return () => {
      onDel(rpid)
    }
  }
  return (
    <div className="reply-item" key={item.rpid}>
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            alt=""
            src={ item.user.avatar }
          />
        </div>
      </div>

      <div className="content-wrap">
        <div className="user-info">
          <div className="user-name">{ item.user.uname }</div>
        </div>
        <div className="root-reply">
          <span className="reply-content">{ item.content }</span>
          <div className="reply-info">
            <span className="reply-time">{ item.ctime }</span>
            <span className="reply-time">点赞数:{ item.like }</span>
            {
              user.uid === item.user.uid && (
                <span className="delete-btn" onClick={handleDeleteComment(item.rpid)}>
                  删除
                </span>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {

  const { commentList, setCommentList, user } = useGetData()
  const [ sortType, setSortType ] = useState('hot')
  const useRefInput = useRef(null)

  function handleDeleteComment(rpid) {
    return () => {
      console.log('删除评论', rpid);
      const newList = commentList.filter(item => item.rpid !== rpid)
      setCommentList(newList)
    }
  }

  function handleChangeSort(type) {
    return () => {
      setSortType(type)
      const newList = _.orderBy(commentList, type === 'hot' ? 'like' : 'ctime', 'desc')
      setCommentList(newList)
    }
  }

  function handlePublish() {
    // console.log('发布评论', useRefInput.current.value);
    const value = useRefInput.current.value
    setCommentList([
      ...commentList,
      {
        "rpid": v4(),
        "user": {
          "uid": user.uid,
          "avatar": user.avatar,
          "uname": user.uname
        },
        "content": value,
        "ctime": dayjs(new Date()).format('MM-DD hh:mm'),
        "like": 0
      }
    ])
    useRefInput.current.value = ''
    useRefInput.current.focus()
  }

  return (
    <div className="app">
      <div className="reply-navigation">
        <ul className="nav-bar">
          {/* 评论总数 */}
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            <span className="total-reply">10</span>
          </li>
          {/* 排序的tab */}
          <li className="nav-sort">
            {
              tabs.map(item => {
                return (
                  <span
                    key={ item.type }
                    className={className('nav-item', { active: sortType === item.type })}
                    onClick={ handleChangeSort(item.type) }
                  >
                    { item.text }
                  </span>
                )
              })
            }
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        <div className="box-normal">
          {/* 用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src="./images/bozai.png" alt="用户头像" />
            </div>
          </div>
          {/* 输入框和发布按钮 */}
          <div className="reply-box-wrap">
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              ref={ useRefInput }
            />
            <div className="reply-box-send">
              <div className="send-text" onClick={ handlePublish }>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {
            commentList.map(item => {
              return (
                <Item item={item} user={user} onDel={handleDeleteComment} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
