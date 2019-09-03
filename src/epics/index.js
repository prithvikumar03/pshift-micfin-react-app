import { combineEpics } from 'redux-observable';
import mfiEpic, { registerMFIEpic } from './MFIEpic';
import { microEntrepreneurEpic,registerMEEpic} from './MicroEntrepreneurEpic';
import {saveLoanRepayment} from './LoanRepaymentEpic';
import {fetchTransactionsEpic} from './TransactionsEpic';
import {loginEpic} from './LoginEpic';

export const rootEpic = combineEpics(loginEpic,mfiEpic,registerMFIEpic,microEntrepreneurEpic,registerMEEpic,saveLoanRepayment,fetchTransactionsEpic);