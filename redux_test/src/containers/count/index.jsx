import CountUI from '../../components/count'
import { connect } from 'react-redux'
import { addAction, addAsyncAction, decreaseAction } from '../../redux/count_action'

export default connect(
  // mapStateTpProps
  state => ({ count: state }),
  // mapDispatchToProps 可以返回一个函数，也可以直接返回一个对象
  // dispatch => ({
  //   jia: number => dispatch(addAction(number)),
  //   jian: number => dispatch(decreaseAction(number)),
  //   jiaAsync: number => dispatch(addAsyncAction(number)),
  // })
  {
    jia: addAction,
    jian: decreaseAction,
    jiaAsync: addAsyncAction,
  }
)(CountUI)