import { NavBar, DatePicker } from 'antd-mobile'
import { useSelector } from 'react-redux'
import { useState, useMemo, useEffect } from 'react'
import className from 'classnames'
import dayjs from 'dayjs'
import _ from 'loadsh'
import './index.scss'

const Month = () => {
  const { billList } = useSelector(state => state.bill)
  const [ visibleDate, setVisibleDate ] = useState(false)
  const [ dateValue, setDateValue ] = useState(dayjs().format('YYYY-MM'))
  const [ currentMonthList, setCurrentMonthList ] = useState([])

  const monthGroup = useMemo(() => {
    // billList改变后会重新渲染
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])

  const monthData = useMemo(() => {
    // 收入、支出、结余
    const pay = currentMonthList.reduce((t, i) => {
      return t + (i.type === 'pay' ? Math.abs(Number(i.money)) : 0)
    }, 0)
    const income = currentMonthList.reduce((t, i) => {
      return t + (i.type === 'income' ? Number(i.money) : 0)
    }, 0)
    const balance = income - pay

    return {
      pay,
      income,
      balance
    }
  }, [currentMonthList])

  console.log('monthGroup', monthGroup);
  function handleDateConfirm(date) {
    // console.log(date)
    const dateValue = dayjs(date).format('YYYY-MM')
    setDateValue(dateValue)
    setCurrentMonthList(monthGroup[dateValue] || [])
    setVisibleDate(false)
  }

  useEffect(() => {
    const nowMonth = dayjs().format('YYYY-MM')
    setCurrentMonthList(monthGroup[nowMonth] || [])
  }, [monthGroup])

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={ () => { setVisibleDate(true) } }>
            <span className="text">
              { dateValue }账单
            </span>
            <span className={ className('arrow', visibleDate && 'expand' ) } ></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{ monthData.pay }</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{ monthData.income }</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{ monthData.balance }</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            onCancel={ () => { setVisibleDate(false) } }
            onConfirm={ handleDateConfirm }
            visible={visibleDate}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month