import { Observable, of } from 'rxjs';
//import { of, from, BehaviorSubject } from 'rxjs'; 
import { ofType, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { getMicfinServiceURL, isProd } from '../utils/ConfigReader';
import * as fake from './fakeResponse';

//https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

import {
    REGISTER_LOAN,
    registerLoanSuccess,
    registerLoanFailure

} from "../actions/LoanActions";



export function saveLoan(action$) {
    return action$.pipe(
        ofType(REGISTER_LOAN),
        switchMap((action$) => {
            let observable = of(fake.saveLoanRepayment);
            
          
            const saveLoanURL = getMicfinServiceURL() + '/micfin/transaction/loan';

             
            if (isProd()) {
                console.log("Calling saveLoan API "+saveLoanURL+" with payload "+JSON.stringify(action$.payload));
               // observable = ajax.post(saveLoanRepaymentURL, action$.payload, { 'Content-Type': 'application/json' });
               observable = ajax.post(saveLoanURL, action$.payload, { 'Content-Type': 'application/json' });
            }

            return (observable.pipe(
                //map(data => data),
                map(response => {
                    console.log('Response in saveLoanRepayment  ------------------>' + JSON.stringify(response.response));
                    return registerLoanSuccess(response.response)
                }),
                catchError(error => of(registerLoanFailure(error.message))) 
            )
            );
        })
    )

}

