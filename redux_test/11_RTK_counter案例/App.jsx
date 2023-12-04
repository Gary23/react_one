import { useSelector, useDispatch } from 'react-redux';
import { incement, decrement } from './redux/modules/counterStore';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  function handleIncement() {
    dispatch(incement());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleIncementNum() {
    dispatch(incement(2));
  }

  return (
    <div className="App">
      <button onClick={ handleIncement }>加1</button>
      &nbsp;&nbsp;
      <span>{ count }</span>
      &nbsp;&nbsp;
      <button onClick={ handleDecrement }>减1</button>
      &nbsp;&nbsp;
      <button onClick={ handleIncementNum }>加2</button>
    </div>
  );
}

export default App;
