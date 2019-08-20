import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as fake from './fakeResponse';

import {
    FETCH_ALL_MFIS,
    fetchMFIFailure,
    fetchMFISuccess,
    REGISTER_MFI,
    registerMFISuccess,
    registerMFIFailure
} from "./../actions/MFIActions";


const url = 'http://localhost:8081/micfin/api/mfis'; 

export default function mfiEpic(action$) { 
    return action$
        .ofType(FETCH_ALL_MFIS) 
          .switchMap(() => {
            return ajax
                .getJSON(url) // getJSON simply sends a GET request with Content-Type application/json
                .map(data => data) // get the data and extract only the results
        }) 
        .map(payload => {
            console.log('payload ------------------>'+payload);
            return fetchMFISuccess(payload)})  
        
        .catch(error => Observable.of(fetchMFIFailure(error.message)))
}


const saveMFIUrl = 'http://localhost:8081/micfin/api/mfi'; 
export function registerMFIEpic(action$) { 
     return action$
        .ofType(REGISTER_MFI) 
          .switchMap((action) => {
          /*   return ajax
                .post(saveMFIUrl,action.payload, { 'Content-Type': 'application/json' }) // getJSON simply sends a GET request with Content-Type application/json
                .map(data => data) // get the data and extract only the results */
                return(Observable.of(fake.registerMFIResponse));
        }) 
        .map(payload => {
            console.log('payload in registerMFIEpic  ------------------>'+JSON.stringify(payload));
            return registerMFISuccess(payload)})  
        
        .catch(error => Observable.of(registerMFIFailure(error.message))) 
}
