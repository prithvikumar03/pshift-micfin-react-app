import { combineEpics } from 'redux-observable';
import mfiEpic, { registerMFIEpic } from './MFIEpic';
import { microEntrepreneurEpic,registerMEEpic} from './MicroEntrepreneurEpic';
import {saveLoanRepayment} from './LoanRepaymentEpic';
import {fetchTransactionsEpic} from './TransactionsEpic';

export const rootEpic = combineEpics(mfiEpic,registerMFIEpic,microEntrepreneurEpic,registerMEEpic,saveLoanRepayment,fetchTransactionsEpic);