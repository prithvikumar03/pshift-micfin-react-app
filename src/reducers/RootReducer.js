import { combineReducers } from 'redux'
import mfiReducer from './MFIReducer'
import { registerMFIReducer } from './MFIReducer'
import { registerMEReducer } from './MEReducer'


export default combineReducers({
   /*  mfiReducer,
    registerMFIReducer */
    registerMEReducer
})