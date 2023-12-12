import classNames from 'classnames'
import { useMemo, useState } from 'react'
import { billTypeToName } from '@/contants/index'
import Icon from '@/components/Icon'
import './index.scss'

const DailyBill = ({ billData, date }) => {

  const [ visible, setVisible ] = useState(true)

  const dayData = useMemo(() => {
    // 收入、支出、结余
    const pay = billData.reduce((t, i) => {
      return t + (i.type === 'pay' ? Math.abs(Number(i.money)) : 0)
    }, 0)
    const income = billData.reduce((t, i) => {
      return t + (i.type === 'income' ? Number(i.money) : 0)
    }, 0)
    const balance = income - pay

    return {
      pay,
      income,
      balance
    }
  }, [billData])

  return (
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon" onClick={() => { setVisible(!visible) }}>
          <span className="date">{ date }</span>
          <span className={classNames('arrow', !visible && 'expand')} ></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{ dayData.pay }</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{ dayData.income }</span>
          </div>
          <div className="balance">
            <span className="money">{ dayData.balance }</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {
        visible && (
          <div className="billList">
            {billData.map(item => {
              return (
                <div className="bill" key={item.id}>
                  <Icon type={ item.useFor } />
                  <div className="detail">
                    <div className="billType">{billTypeToName[item.useFor]}</div>
                  </div>
                  <div className={classNames('money', item.type)}>
                    {item.money.toFixed(2)}
                  </div>
                </div>
              )
            })}
          </div>
        )
      }

    </div>
  )
}
export default DailyBill