import { Observable,of } from 'rxjs';
import { map, filter, scan, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { ofType, getJSON } from 'redux-observable';
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
    return action$.pipe(
        ofType(FETCH_ALL_MFIS), 
        switchMap((action$) => {
            let observable=of(fake.getAllMFIs);
            //let observable = ajax.getJSON(url);
            return (observable.pipe(
                map(data => data),
                map(response => {
                    console.log('payload in registerMFIEpic  ------------------>' + JSON.stringify(response));
                    return fetchMFISuccess(response)
                }),
                //catchError(error => Observable.of(fetchMFIFailure(error.message))) 
            )
            );
        }) 
    )
}





const saveMFIUrl = 'http://localhost:8081/micfin/api/mfi'; 
export function registerMFIEpic(action$) { 
     return action$.pipe(
        ofType(REGISTER_MFI) ,
        switchMap((action$) => {
                let observable=of(fake.registerMEResponse);
                  //let observable = ajax.post(saveMFIUrl,action.payload, { 'Content-Type': 'application/json' });
                return(observable.pipe(
                    map(response => {
                        console.log('payload in registerMFIEpic  ------------------>' + JSON.stringify(response));
                        return registerMFISuccess(response)
                    }),
                    //catchError(error => Observable.of(registerMFIFailure(error.message))) 
                ));

        }) 
       
     )
}




