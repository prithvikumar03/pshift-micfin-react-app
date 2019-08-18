import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    FETCH_ALL_MFIS,
    fetchMFIFailure,
    fetchMFISuccess
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


