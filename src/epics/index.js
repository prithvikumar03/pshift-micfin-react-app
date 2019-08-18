import { combineEpics } from 'redux-observable';
import mfiEpic from './MFIEpic';
import { registerMFIEpic } from './MFIEpic';


export const rootEpic = combineEpics(mfiEpic,registerMFIEpic);