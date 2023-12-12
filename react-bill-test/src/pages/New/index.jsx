import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import { useState } from 'react' 
import Icon from '@/components/Icon'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/contants'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postBillList } from '@/redux/modules/billStore'

const New = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [ selectType, setSelectType ] = useState('pay')
  const [ money, setMoney ] = useState('')
  const [ usrFor, setUsrFor ] = useState('')

  function handleChange(e) {
    setMoney(e)
  }

  function handleSubmit() {
    const data = {
      type: selectType,
      money: money,
      useFor: usrFor,
      date: new Date()
    }
    dispatch(postBillList(data))
  }

  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            onClick={() => { setSelectType('pay') }}
            className={classNames(selectType === 'pay' && 'selected')}
          >
            支出
          </Button>
          <Button
            className={classNames(selectType === 'income' && 'selected')}
            onClick={() => { setSelectType('income') }}
            shape="rounded"
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text">{'今天'}</span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={ handleChange }
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[selectType].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    <div
                      className={classNames(
                        'item',
                        item.type === usrFor && 'selected'
                      )}
                      onClick={() => { setUsrFor(item.type) }}
                      key={item.type}

                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={ handleSubmit }>
          保 存
        </Button>
      </div>
    </div>
  )
}

export default New