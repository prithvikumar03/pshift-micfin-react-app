import { Observable,of } from 'rxjs';
//import { of, from, BehaviorSubject } from 'rxjs'; 
import { ofType, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, filter, scan, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as fake from './fakeResponse';

//https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

import {
    LOAN_REPAYMENT,
    loanRepaymentSuccess,
    loanRepaymentFailure

} from "../actions/LoanRepaymentActions";


const saveLoanRepaymentURL = 'http://localhost:8081/micfin/api/microentrepreneur';
export function saveLoanRepayment(action$) {
     return action$.pipe(
        ofType(LOAN_REPAYMENT),
        switchMap((action$) => {
             let observable=of(fake.saveLoanRepayment);
            //let observable = ajax.post(saveMEUrl,action.payload, { 'Content-Type': 'application/json' });
            return (observable.pipe(
                map(data => data),
                map(response => {
                    console.log('payload in saveLoanRepayment  ------------------>' + JSON.stringify(response));
                    return loanRepaymentSuccess(response)
                }),
                //catchError(error => Observable.of(registerMEFailure(error.message))) 
            )
            );
        })
     )
        
}
 
