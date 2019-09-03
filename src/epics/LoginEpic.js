import { Observable,of } from 'rxjs';
import { map, filter, scan, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { ofType, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as fake from './fakeResponse';
import {getMicfinServiceURL,isProd} from '../utils/ConfigReader';


import {
    
LOGIN_USER,
loginUserSuccess,
loginUserFailure

    
} from '../actions/LoginActions';


//const loginUrl = getMicfinServiceURL()+'/micfin/api/mfis'; 
export function loginEpic(action$) { 
    return action$.pipe(
        ofType(LOGIN_USER), 
        switchMap((action$) => {
            console.log("Calling LOGIN_USER API ");
            let observable=of(fake.getLoggedInUserInfo(action$.payload.userId));
            if(isProd()){
               // observable = ajax.getJSON(loginUrl);
               observable=of(fake.getLoggedInUserInfo(action$.payload.userId));
            }
            return (observable.pipe(
                map(data => data),
                map(response => {
                    console.log('payload in  loginEpic ->' + JSON.stringify(response.response));
                    return loginUserSuccess(response.response)
                }),
                catchError(error => of(loginUserFailure(error.message))) 
            )
            );
        }) 
    )
}   


