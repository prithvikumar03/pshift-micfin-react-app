import {
    LOAN_REPAYMENT,
    LOAN_REPAYMENT_SUCCESS,
    LOAN_REPAYMENT_FAILURE,
} from './../actions/LoanRepaymentActions';

import {
    NOTIFICATION_ON,
    NOTIFICATION_OFF,
} from './../actions/NotificationActions';

const initialState = {
    loanRepayment: {
        "loanId": "",
        "mfiId": "",
        "microEntrepreneurId": "",
        "date": "",
        "interestRate": 0,
        "loanAmount": "",
        "payment": 0,
        "paymentDelayedInMonths": 0,
        "productId": "",
        "productName": "",
        "tenure": 0
    },
    isLoading: false,
    error: null
};

export function loanRepaymentReducer(state = initialState, action) {
    console.log('Inside loanRepaymentReducer with action ' + action.type);
    switch (action.type) {

        case LOAN_REPAYMENT:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case LOAN_REPAYMENT_SUCCESS:
            return {
                ...state,
                loanRepayment: action.payload,
                isLoading: false,
                error: null,
                message: action.message,
                open: true
            };
        case LOAN_REPAYMENT_FAILURE:
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

