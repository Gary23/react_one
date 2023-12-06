import classNames from 'classnames'
import { setActiveIndex } from '../../store/modules/foodsStore'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'

const Menu = () => {
  const dispatch = useDispatch()
  const { foodList, activeIndex } = useSelector( state => state.foods )
  const menus = foodList.map(item => ({ tag: item.tag, name: item.name }))

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={ () => { dispatch(setActiveIndex(index)) } }
            key={item.tag}
            className={classNames(
              'list-menu-item',
              activeIndex === index && 'active'
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
