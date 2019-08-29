import { Observable } from 'rxjs';
import { ofType, of, getJSON } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map,switchMap, catchError } from 'rxjs/operators';

import * as fake from './fakeResponse';



import {
    TRANSACTIONS_FETCH,
    fetchTransactionsSuccess,
    fetchTransactionsFailure

} from "../actions/TransactionsActions";



const fetchTransactionsUrl = 'http://localhost:8081/micfin/api/transactions';
export function fetchTransactionsEpic(action$) {
    return action$.pipe(
        ofType(TRANSACTIONS_FETCH),
        switchMap((action) => {
            let observable=Observable.of(fake.fetchTransactions);
            //let observable = ajax.getJSON(url);
            return (observable.pipe(
                map(data => data),
                map(response => {
                    console.log('payload in fetchTransactionsEpic  ------------------>' + JSON.stringify(response));
                    return fetchTransactionsSuccess(response)
                }),
                //catchError(error => Observable.of(fetchTransactionsFailure(error.message))) 
            )
            );
        })
    )
} 


 
