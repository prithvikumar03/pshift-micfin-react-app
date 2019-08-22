import { combineEpics } from 'redux-observable';
import mfiEpic from './MFIEpic';
import { registerMFIEpic } from './MFIEpic';
import { microEntrepreneurEpic} from './MicroEntrepreneurEpic';

export const rootEpic = combineEpics(mfiEpic,registerMFIEpic,microEntrepreneurEpic);