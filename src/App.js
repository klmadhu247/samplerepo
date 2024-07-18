import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import Personal_Details from './Redux/Personal_Details'





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