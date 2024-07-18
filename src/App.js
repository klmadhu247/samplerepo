import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Redux/Reducer'
import Personal_Details from './Redux/Personal_Details'


const store = createStore(reducer)


function App (){

 

  return(
    <div>

      <Provider store={store}>

     <Personal_Details/>

      </Provider>
  

    </div>
  )
}
export default App