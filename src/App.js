

import './App.css';
import store from './Redux/Store'// imported the required store
import { Provider } from 'react-redux';// imported Provider which we use to wrap the app inside of it so that within this any element can access the store
import Customer from './Customer'


function App() {
  return (
    <Provider store={store}> {/*store access is given to the provider by passing it*/}
    <div className="App">
      <h2>Redux </h2>

      <Customer/>   {/*we can access store only if we mention the element inside Provider*/}
    </div>
    </Provider>
  );
}

export default App;
