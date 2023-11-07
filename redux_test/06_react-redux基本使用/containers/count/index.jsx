import CountUI from '../../components/count'
import { connect } from 'react-redux'
import { addAction, addAsyncAction, decreaseAction } from '../../redux/count_action'

const mapStateTpProps = function(state) {
  return { count: state }
}

const mapDispatchToProps = function(dispatch) {
  return {
    jia: number => dispatch(addAction(number)),
    jian: number => dispatch(decreaseAction(number)),
    jiaAsync: number => dispatch(addAsyncAction(number)),
  }
}

export default connect(mapStateTpProps, mapDispatchToProps)(CountUI)