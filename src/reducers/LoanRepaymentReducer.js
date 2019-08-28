import {
    LOAN_REPAYMENT,
    LOAN_REPAYMENT_SUCCESS,
    LOAN_REPAYMENT_FAILURE,
} from './../actions/LoanRepaymentActions';

const initialState ={
    loanRepayment:  {
        "loanId" :"",
         "mfiId" : "",
         "meId" : "",
         "product" :{
           "productId" :"",
           "productName" : "",
           "interestRate" : "",
           "tenure" : "",
         },
         "amount":"",
         "date": ""
    },
    isLoading: false,
    error: null
};

export function loanRepaymentReducer(state = initialState, action) {
    console.log('Inside loanRepaymentReducer with action '+action.type);
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
                error: null
            };
        case LOAN_REPAYMENT_FAILURE:
            return {
                ...state,
                loanRepayment: null,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

