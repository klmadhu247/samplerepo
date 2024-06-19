Explaining on access from the form eg: increment /decrement based on text input from user,
default export and named export , how to save the export data in separate file and how to import it within the component


import {todos} from './data.js'    /* if it is a named export we have to use {} to import */
import {reviews} from './data.js'   /* if it is a named export we have to use {} to import */

if it is named default we can simply import from the file like as usual
import todos from './data.js'
import reviews from './data.js'