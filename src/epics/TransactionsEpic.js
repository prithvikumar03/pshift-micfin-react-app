import { of } from 'rxjs';
import { ofType } from 'redux-observable';
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
        switchMap((action$) => {
            var fetchTransactionsUrl=''
            let dbsId=action$.payload.dbsId;
            let mfiId=action$.payload.mfiId;
            let microEntrepreneurId=action$.payload.microEntrepreneurId;
            if(dbsId){
                fetchTransactionsUrl = getMicfinServiceURL()+`/micfinreactive/transaction/loans`;
            }
            else if (mfiId) {
                fetchTransactionsUrl = getMicfinServiceURL()+`/micfinreactive/transaction/mfi/${mfiId}/loans`;
            }
            else if (microEntrepreneurId){
                fetchTransactionsUrl = getMicfinServiceURL()+`/micfinreactive/transaction/mfi/${mfiId}/micro-entrepreneur/${microEntrepreneurId}/loans`;
            }
            
            /* const fetchTransactionsUrl = getMicfinServiceURL()+`/micfin/api/loans/${mfiId}`; */
          

            let observable=of(fake.fetchLoans);
            if(isProd()){
                observable = ajax.getJSON(fetchTransactionsUrl);
            }
            return (observable.pipe(
                map(response => {
                    console.log('payload in fetchTransactionsEpic  ------------------>' + JSON.stringify(response));
                    return fetchTransactionsSuccess(response)
                                  }),
                catchError(error => of(fetchTransactionsFailure(error.message))) 
            )
            );
        })
    )
} 




 
