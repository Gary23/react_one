import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incement, decrement } from './redux/modules/counterStore';
import { fetchChannelList } from './redux/modules/channelStore';

function App() {
  const count = useSelector((state) => state.counter.count);
  const channelList = useSelector((state) => state.channels.channelList);
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
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div className="App">
      <button onClick={ handleIncement }>加1</button>
      &nbsp;&nbsp;
      <span>{ count }</span>
      &nbsp;&nbsp;
      <button onClick={ handleDecrement }>减1</button>
      &nbsp;&nbsp;
      <button onClick={ handleIncementNum }>加2</button>
      <div>
        <ul>
          {
            channelList.map(item => {
              return (
                <li key={ item.id }>{ item.name }</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
