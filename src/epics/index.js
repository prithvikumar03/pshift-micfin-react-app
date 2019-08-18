import { combineEpics } from 'redux-observable';
import mfiEpic from './MFIEpic';


export const rootEpic = combineEpics(mfiEpic);