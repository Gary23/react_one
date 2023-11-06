import './App.css';
import store from './redux/store'
import Count from './containers/count'

function App() {
  return (
    <div className="App">
      <Count store={store} />
    </div>
  );
}

export default App;
