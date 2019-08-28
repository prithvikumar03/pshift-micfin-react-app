import { combineEpics } from 'redux-observable';
import mfiEpic from './MFIEpic';
import { registerMFIEpic } from './MFIEpic';
//import { microEntrepreneurEpic,registerMEEpic} from './MicroEntrepreneurEpic';
import { microEntrepreneurEpic,registerMEEpic} from './MicroEntrepreneurEpic';
import {saveLoanRepayment} from './LoanRepaymentEpic';

//export const rootEpic = combineEpics(mfiEpic,registerMFIEpic,microEntrepreneurEpic,registerMEEpic);
export const rootEpic = combineEpics(microEntrepreneurEpic,registerMEEpic,saveLoanRepayment);