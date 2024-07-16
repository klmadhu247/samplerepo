import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cricket from './cricket';
import Football from './football';
import Tennis from './tennis';
import  Home from './Home';
import About from './About';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Baseball from './Baseball';




function App (){
return(

        <Router>
            <div>
            app
            </div>
            <div>Nav Bar
            <Link to='/' className='p-3'>Home</Link >
            <Link to='/cricket'>Cricket</Link>{`  `}
            <Link to ='/football'>Football </Link>{'  '}
            <Link to ='/tennis'>Tennis</Link>{'  '}
            <Link to ='/Baseball'>BaseBall</Link>
            </div>

        <Switch>
        <Route exact path='/'><Home/></Route>

        <Route path ='/cricket'>
          <Cricket/>
        </Route>

        //we can also use the route as below by just calling the component in itself, will be used 10% in RT
        <Route path='/Baseball' component={Baseball}/>



        <Route path='/football' 
        render={(props)=>
          {
            return <Football {...props} />
          }
        }
         />


            <Route path='/tennis'
            render={(props)=>
            {
            return <Tennis {...props} name='madhuKL'/>
            }
            }
            />


            
                <Route path='*'>
                  <ErrorPage/>
                  </Route>

        </Switch>
        </Router>
)
}
export default App