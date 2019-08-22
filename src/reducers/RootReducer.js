import { combineReducers } from 'redux'
import mfiReducer from './MFIReducer'
import { microEntrepreneurReducer } from './MEReducer'


export default combineReducers({
    mfi: mfiReducer,
    me: microEntrepreneurReducer
}) 