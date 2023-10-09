import { Provider } from 'react-redux';
import store from './redux/store';

import './App.scss';
import { Wrapper } from './wrapper/Wrapper';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='App_screen'>
        <Wrapper />
        </div>
      </div>
    </Provider>
  );
}

export default App;
