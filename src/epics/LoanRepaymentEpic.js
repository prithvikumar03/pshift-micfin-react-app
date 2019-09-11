import { Observable, of } from 'rxjs';
//import { of, from, BehaviorSubject } from 'rxjs'; 
import { ofType, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { getMicfinServiceURL, isProd } from '../utils/ConfigReader';
import * as fake from './fakeResponse';

//https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

import {
    LOAN_REPAYMENT,
    loanRepaymentSuccess,
    loanRepaymentFailure

} from "../actions/LoanRepaymentActions";



export function saveLoanRepayment(action$) {
    return action$.pipe(
        ofType(LOAN_REPAYMENT),
        switchMap((action$) => {
            let observable = of(fake.saveLoanRepayment);
            
            let loanId = action$.payload.loanId;
            //const saveLoanRepaymentURL = getMicfinServiceURL() + `/micfin/transaction/repayment/${loanId}`;
            const saveLoanRepaymentURL = getMicfinServiceURL() + '/micfin/transaction/repayment';

           /*  let dummy={
                "date": "2019-09-10T04:12:57.870Z",
                "id": "string",
                "interestRate": 10,
                "loanAmount": 110,
                "loanId": "L200",
                "mfiId": "MFI1",
                "microEntrepreneurId": "ME101",
                "payment": 28,
                "paymentDelayedInMonths": 0,
                "productId": "string",
                "productName": "string",
                "tenure": 0
              }; */

            if (isProd()) {
                console.log("Calling saveLoanRepayment API "+saveLoanRepaymentURL+" with payload "+JSON.stringify(action$.payload));
                observable = ajax.post(saveLoanRepaymentURL, action$.payload, { 'Content-Type': 'application/json' });
               //observable = ajax.post(saveLoanRepaymentURL, dummy, { 'Content-Type': 'application/json' });
            }

            return (observable.pipe(
                //map(data => data),
                map(response => {
                    console.log('Response in saveLoanRepayment  ------------------>' + JSON.stringify(response.response));
                    return loanRepaymentSuccess(response.response)
                }),
                catchError(error => of(loanRepaymentFailure(error.message))) 
            )
            );
        })
    )

}

