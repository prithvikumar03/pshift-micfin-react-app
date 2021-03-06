import { Observable,of } from 'rxjs';
import { map, filter, scan, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { ofType, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as fake from './fakeResponse';
import {getMicfinServiceURL,isProd} from './../utils/ConfigReader';


import {
    FETCH_ALL_MFIS,
    fetchMFIFailure,
    fetchMFISuccess,
    REGISTER_MFI,
    registerMFISuccess,
    registerMFIFailure
} from "./../actions/MFIActions";


const fetchMFIsUrl = getMicfinServiceURL()+'/micfinreactive/api/mfis'; 
export default function mfiEpic(action$) { 
    return action$.pipe(
        ofType(FETCH_ALL_MFIS), 
        switchMap((action$) => {
            console.log("Calling fetch mfi API "+fetchMFIsUrl);
            let observable=of(fake.getAllMFIs);
            if(isProd()){
                observable = ajax.getJSON(fetchMFIsUrl);
            }
            return (observable.pipe(
                //map(data => data),
                map(response => {
                    console.log('payload in fetch mfiEpic ->' + JSON.stringify(response));
                    return fetchMFISuccess(response)
                }),
                catchError(error => of(fetchMFIFailure(error.message))) 
            )
            );
        }) 
    )
}   


const saveMFIUrl = getMicfinServiceURL()+'/micfinreactive/api/mfi'; 
export function registerMFIEpic(action$) { 
     return action$.pipe(
        ofType(REGISTER_MFI) ,
        switchMap((action$) => {
                console.log("Calling registerMFI API "+saveMFIUrl +'with payload'+JSON.stringify(action$.payload));
                let observable=of(fake.registerMFIResponse);
                if(isProd()){
                    observable = ajax.post(saveMFIUrl,action$.payload, { 'Content-Type': 'application/json' });
                }
                return(observable.pipe(
                   // map(response => response),
                    map(response => {
                        console.log('payload in registerMFIEpic-->' + JSON.stringify(response.response));
                        return registerMFISuccess(response.response)
                    }),
                    catchError(error => of(registerMFIFailure(error.message))) 
                ));

        }) 
       
     )
}




