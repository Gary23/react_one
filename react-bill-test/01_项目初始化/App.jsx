import Element from './route/index'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBillList } from './redux/modules/billStore';

function App() {
  const dispatch = useDispatch();

  const { billList } = useSelector(state => state.bill);
  console.log('bill-----',billList);

  useEffect(() => {
    dispatch(fetchBillList())
  }, [dispatch])

  return (
    <div className="App">
      <Element />
    </div>
  );
}

export default App;
