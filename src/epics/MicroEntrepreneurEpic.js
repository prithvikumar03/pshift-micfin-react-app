import { of } from 'rxjs';
import { ofType} from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import {getMicfinServiceURL,isProd} from './../utils/ConfigReader';
import { ajax } from 'rxjs/observable/dom/ajax';
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




export function microEntrepreneurEpic(action$) {

    return action$.pipe(
        ofType(FETCH_ALL_ENTREPRENEURS),
        switchMap((action$) => {
            let mfiId=action$.payload.mfiId;
            const fetchMicroentrepreneursUrl = getMicfinServiceURL()+`/micfin/api/mfi/${mfiId}/micro-entrepreneurs`;
            let observable=of(fake.getAllMicroEntrepreneursResponse);
            if(isProd()){
                observable = ajax.getJSON(fetchMicroentrepreneursUrl);
            }
            return (observable.pipe(
                map(response => {
                    console.log('payload in registerMFIEpic  ------------------>' + JSON.stringify(response.response));
                    return fetchAllEntrepreneursSuccess(response.response)
                }),
                catchError(error => of(fetchAllEntrepreneursFailure(error.message))) 
            )
            );
        })
    )
}


const saveMEUrl = getMicfinServiceURL()+'/micfin/api/microentrepreneur';
export function registerMEEpic(action$) {
     return action$.pipe(
        ofType(REGISTER_ME),
        switchMap((action$) => {
             let observable=of(fake.registerMEResponse);
             if(isProd()){
                observable = ajax.post(saveMEUrl,action$.payload, { 'Content-Type': 'application/json' });
             }
            return (observable.pipe(
                map(response => {
                    console.log('payload in registerMEEpic  ------------------>' + JSON.stringify(response.response));
                    return registerMESuccess(response.response)
                }),
                catchError(error => of(registerMEFailure(error.message))) 
            )
            );
        })
     )   
}
 

