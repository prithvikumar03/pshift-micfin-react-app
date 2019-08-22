import { combineReducers } from 'redux'
import mfiReducer from './MFIReducer'
import { registerMEReducer } from './MEReducer'


export default combineReducers({
    mfi: mfiReducer,
    me:  registerMEReducer
})