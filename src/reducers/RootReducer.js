import { combineReducers } from 'redux'
import mfiReducer from './MFIReducer'
import { microEntrepreneurReducer } from './MEReducer'
import { loanRepaymentReducer  } from './LoanRepaymentReducer'
import { transactionsReducer  } from './TransactionsReducer'
import loginReducer from './LoginReducer'
import {loanReducer} from './LoanReducer'


export default combineReducers({
    mfi: mfiReducer,
    me: microEntrepreneurReducer,
    lr: loanRepaymentReducer,
    tr: transactionsReducer,
    login:loginReducer,
    loan:loanReducer
}) 