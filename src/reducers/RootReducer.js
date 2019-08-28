import { combineReducers } from 'redux'
import mfiReducer from './MFIReducer'
import { microEntrepreneurReducer } from './MEReducer'
import { loanRepaymentReducer  } from './LoanRepaymentReducer'


export default combineReducers({
    mfi: mfiReducer,
    me: microEntrepreneurReducer,
    lr: loanRepaymentReducer
}) 