import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as fake from './fakeResponse';

import {
    FETCH_ALL_ENTREPRENEURS,
    fetchAllEntrepreneursSuccess,
    fetchAllEntrepreneursFailure
    
} from "./../actions/MEActions";



const url = 'http://localhost:8081/micfin/api/mfi'; 
export function microEntrepreneurEpic(action$) { 
     return action$
        .ofType(FETCH_ALL_ENTREPRENEURS) 
          .switchMap((action) => {
          /*   return ajax
                .post(saveMFIUrl,action.payload, { 'Content-Type': 'application/json' }) // getJSON simply sends a GET request with Content-Type application/json
                .map(data => data) // get the data and extract only the results */
                return(Observable.of(fake.getAllMicroEntrepreneursResponse));
        }) 
        .map(payload => {
            console.log('payload in registerMFIEpic  ------------------>'+JSON.stringify(payload));
            return fetchAllEntrepreneursSuccess(payload)})  
        
        .catch(error => Observable.of(fetchAllEntrepreneursFailure(error.message))) 
}
