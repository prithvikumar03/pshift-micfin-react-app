import { Observable,of } from 'rxjs';
import { ofType, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map,switchMap, catchError } from 'rxjs/operators';
import {getMicfinServiceURL,isProd} from './../utils/ConfigReader';
import * as fake from './fakeResponse';



import {
    TRANSACTIONS_FETCH,
    fetchTransactionsSuccess,
    fetchTransactionsFailure

} from "../actions/TransactionsActions";




export function fetchTransactionsEpic(action$) {
    return action$.pipe(
        ofType(TRANSACTIONS_FETCH),
        switchMap((action) => {
            const fetchTransactionsUrl = getMicfinServiceURL()+'/micfin/api/transactions';
            let observable=of(fake.fetchTransactions);
            if(isProd()){
                observable = ajax.getJSON(fetchTransactionsUrl);
            }
            return (observable.pipe(
                map(response => {
                    console.log('payload in fetchTransactionsEpic  ------------------>' + JSON.stringify(response.response));
                    return fetchTransactionsSuccess(response.response)
                }),
                //catchError(error => Observable.of(fetchTransactionsFailure(error.message))) 
            )
            );
        })
    )
} 

/* 
const fetchMFIsUrl = getMicfinServiceURL()+'/micfin/api/mfis'; 
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
                map(data => data),
                map(response => {
                    console.log('payload in fetch mfiEpic ->' + JSON.stringify(response.response));
                    return fetchMFISuccess(response.response)
                }),
                catchError(error => of(fetchMFIFailure(error.message))) 
            )
            );
        }) 
    )
}   
 */


 
