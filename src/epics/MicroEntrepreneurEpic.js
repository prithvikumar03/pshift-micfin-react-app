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
            let mfiId=action$.payload;
            const fetchMicroentrepreneursUrl = getMicfinServiceURL()+`/micfin/api/mfi/${mfiId}/micro-entrepreneurs`;
            console.log('Calling fetch microEntrepreneurs url '+fetchMicroentrepreneursUrl+'for MFI ID ' + mfiId );
            let observable=of(fake.getAllMicroEntrepreneursResponse);
            if(isProd()){
                observable = ajax.getJSON(fetchMicroentrepreneursUrl);
            }
            return (observable.pipe(
                map(response => {
                    console.log('Response in fetch microEntrepreneurEpic ------------------>' + JSON.stringify(response));
                    return fetchAllEntrepreneursSuccess(response)
                }),
                catchError(error => of(fetchAllEntrepreneursFailure(error.message))) 
            )
            );
        })
    )
}



export function registerMEEpic(action$) {
     return action$.pipe(
        ofType(REGISTER_ME),
        switchMap((action$) => {
            let mfiId=action$.payload.mfiId;
            const saveMEUrl = getMicfinServiceURL()+`/micfin/api/mfi/${mfiId}/micro-entrepreneur`;
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
 

