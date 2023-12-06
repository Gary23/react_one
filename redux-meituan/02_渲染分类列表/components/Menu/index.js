import classNames from 'classnames'
import { useSelector } from 'react-redux' 
import './index.scss'

const Menu = () => {
  const { foodList } = useSelector(state => state.foods)
  const menus = foodList.map(item => ({ tag: item.tag, name: item.name }))

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames(
              'list-menu-item',
              'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
