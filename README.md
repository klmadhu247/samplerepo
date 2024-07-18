 STEPS
  1. install the following package
        npm i redux
        npm i react-redux
  2. create a reducer 
        1. create a initial state which is an object
        2. Reducer is an arrow function with two arguments (state,action)
        3. initialize state with initial state
        4. simply return state within the function
  3. Come to App.js wrap whole component with Provider   
        1.import createStore from redux
           import {createStore} from 'redux';
        2. import reducer
            import reducer from "./redux/reducer";
        
        3. create a store
             const store = createStore(reducer)

        4. import Provider from react-redux
              import { Provider } from "react-redux";     
        5. Wrap whole app with Provider by passing store as store      
  
  4. Connect your component (UI) withstore
       1. import connect from react-redux
          import { connect } from "react-redux";
       2. use mapStateToProps function with state as an argument and return necessary values   
              
              const mapStateToProps = (state)=>
                        {
                            return{
                                Name:state.Name,
                                age:state.age
                                  }

        3. call the state value with props
                        }
        4. we have to connect using as follows here we are using to connect mapStateToProps with ReduxChild as below

              export default connect (mapStateToProps)  (ReduxChild)          
5. If component to  update any value in the state
    1.  Dispatch an action
    2.  action is a fucntion it returns object {type, payload}
    3.  action will trigger reducer 
    4.  Reducer will change the value
