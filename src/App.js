import React from "react";
import {createStore} from 'redux'
import reducer from "./Redux/Reducer";
import { Provider } from "react-redux";
import ReduxChild from "./Redux/ReduxChild";
import Child_Two from './Redux/Child_Two'


const store = createStore(reducer)
function App() {
  return (

    <div >
      <Provider store={store}>
        <ReduxChild/>

        <Child_Two/>

     
      </Provider>
      
    </div>
  );
}

export default App;
