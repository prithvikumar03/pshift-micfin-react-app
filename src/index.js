import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'rxjs';
import { createStore, applyMiddleware,compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducers/RootReducer';
import { rootEpic } from './epics/index';
import { composeWithDevTools } from 'redux-devtools-extension';
//import Amplify from 'aws-amplify'
//import config from './aws-exports'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import {red, blue, grey,indigo, cyan, purple,deepPurple,deepOrange,brown} from '@material-ui/core/colors'
const epicMiddleware = createEpicMiddleware();

//const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);
//Amplify.configure(config);


const theme = createMuiTheme({
    palette: {
      primary: {
        //main: "#b2ebf2" //teal theme 1
        //main: "#007bff" //blue theme 2
       // main: "#3b5998" //facebook theme 2
       //main: cyan[800] // theme 4
      // main: purple[900] // theme 4
      //main: "#00e5ff" // theme 4
      main: blue[800] // theme 4 #1565c0
       //  main: "#311b92"
       
        
        //main: red[700] //red theme 3
      },
      secondary: {
        //main: grey[600] //grey theme 1
        //main: "#fff" //white theme 2
        main: grey[900] //grey theme 3
      },
      background: {
        main: grey[200],
        /* secondary: grey[300] */
        secondary: grey[200], 
        tertiary: blue[100]
        
      }
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      /* fontFamily: [
        '"Lato"',
        'sans-serif'
      ].join(',') */
     fontFamily: [
        '"Arial"',
        'sans-serif'
      ].join(',') 
  
    }
  });



ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
