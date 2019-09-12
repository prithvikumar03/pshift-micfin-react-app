import {
    REGISTER_LOAN,
    REGISTER_LOAN_SUCCESS,
    REGISTER_LOAN_FAILURE,
} from '../actions/LoanActions';

import {
    NOTIFICATION_ON,
    NOTIFICATION_OFF,
} from '../actions/NotificationActions';

const initialState = {
    loan: {
        "date": "",
        "emi":'' ,
        "interestRate": '',
        "listLoanSchedule": [
        
        ],
        "loanAmount": '',
        "loanBalance": '',
        "loanId": "",
        "mfiId": "",
        "mfiName": "",
        "microEntrepreneurId": "",
        "microEntrepreneurName": "",
        "productId": "",
        "productName": "",
        "repaymentInfoList": [
        
        ],
        "tenure": '',
        "totalInterestPaid": '',
        "totalPrincipalPaid": ''
            },
    isLoading: false,
    error: null
};

export function loanReducer(state = initialState, action) {
    console.log('Inside loanRegisterReducer with action ' + action.type);
    switch (action.type) {

        case REGISTER_LOAN:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case REGISTER_LOAN_SUCCESS:
            return {
                ...state,
                loanRepayment: action.payload,
                isLoading: false,
                error: null,
                message: action.message,
                open: true
            };
        case REGISTER_LOAN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                message: action.message,
                open: true
            };
        case NOTIFICATION_ON:
                return {
                    ...state,
                    open:true
                };
        case NOTIFICATION_OFF:
                return {
                    ...state,
                    error: "",
                    open:false
                };     
        default:
            return state;
    }
}

