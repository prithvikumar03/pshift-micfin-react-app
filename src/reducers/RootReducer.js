import { combineReducers } from 'redux'
import mfiReducer from './MFIReducer'
import { registerMFIReducer } from './MFIReducer'


export default combineReducers({
    mfiReducer,
    registerMFIReducer
})