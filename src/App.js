import './App.css';
import MultipleCounter from './features/MultipleCounter';
import { Provider } from 'react-redux'
import { store } from './app/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <MultipleCounter/>
    </div>
    </Provider>
  );
}

export default App;
