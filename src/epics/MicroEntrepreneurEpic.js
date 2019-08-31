import { Observable,of } from 'rxjs';
//import { of, from, BehaviorSubject } from 'rxjs'; 
import { ofType, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, filter, scan, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as fake from './fakeResponse';

//https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

import {
    FETCH_ALL_ENTREPRENEURS,
    fetchAllEntrepreneursSuccess,
    fetchAllEntrepreneursFailure,
    REGISTER_ME,
    registerMESuccess,
    registerMEFailure

} from "./../actions/MEActions";



const url = 'http://localhost:8081/micfin/api/mfi';
export function microEntrepreneurEpic(action$) {
    return action$.pipe(
        ofType(FETCH_ALL_ENTREPRENEURS),
        switchMap((action$) => {
            let observable=of(fake.getAllMicroEntrepreneursResponse);
            //let observable = ajax.getJSON(url);
            return (observable.pipe(
                map(data => data),
                map(response => {
                    console.log('payload in registerMFIEpic  ------------------>' + JSON.stringify(response));
                    return fetchAllEntrepreneursSuccess(response)
                }),
                //catchError(error => Observable.of(fetchAllEntrepreneursFailure(error.message))) 
            )
            );
        })
    )
}


const saveMEUrl = 'http://localhost:8081/micfin/api/microentrepreneur';
export function registerMEEpic(action$) {
     return action$.pipe(
        ofType(REGISTER_ME),
        switchMap((action$) => {
             let observable=of(fake.registerMEResponse);
            //let observable = ajax.post(saveMEUrl,action.payload, { 'Content-Type': 'application/json' });
            return (observable.pipe(
                map(data => data),
                map(response => {
                    console.log('payload in registerMEEpic  ------------------>' + JSON.stringify(response));
                    return registerMESuccess(response)
                }),
                //catchError(error => Observable.of(registerMEFailure(error.message))) 
            )
            );
        })
     )   
}
 


/*
const saveMEUrl = 'http://localhost:8081/micfin/api/microentrepreneur';
export function registerMEEpic(action$) {
     return action$
        .ofType(REGISTER_ME)
          .switchMap((action) => {
             return ajax
                .post(saveMFIUrl,action.payload, { 'Content-Type': 'application/json' }) // getJSON simply sends a GET request with Content-Type application/json
                .map(data => data) // get the data and extract only the results
                return(Observable.of(fake.registerMEResponse));
        })
        .map(payload => {
            console.log('payload in registerMEEpic  ------------------>'+JSON.stringify(payload));
            return registerMESuccess(payload)})

        .catch(error => Observable.of(registerMEFailure(error.message)))
}
 */
