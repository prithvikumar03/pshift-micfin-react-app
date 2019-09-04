import {
    REGISTER_ME,
    REGISTER_ME_SUCCESS,
    REGISTER_ME_FAILURE,
    FETCH_ALL_ENTREPRENEURS,
    FETCH_ALL_ENTREPRENEURS_SUCCESS,
    FETCH_ALL_ENTREPRENEURS_FAILURE
} from './../actions/MEActions';

import {
    NOTIFICATION_ON,
    NOTIFICATION_OFF,
} from './../actions/NotificationActions';

const initialState ={
    mfiId:"",
    microentrepreneur: {
    "microEntrepreneurId": "",
    "aadhar": "",
    "address": {
      "city": "",
      "country": "",
      "pinCode": "",
      "streetName": "",
      "unitNo": ""
    },
    "businessExp": "",
    "businessRegistered": false,
    "businessStartYear": "",
    "distBusinessToHome": "",
    "dob": "",
    "drinker": false,
    "emiMonthly": "",
    "firstName": "",
    "formalSavingsAccount": "",
    "gender": "",
    "highestEducation": "",
    "householExp": "",
    "householdIncome": "",
    "id": "",
    "incomeFromOtherSources": "",
    "lastName": "",
    "maritialStatus": "",
    "mfiId": "",
    "noOfEmployees": "",
    "noOfNonEarningMembers": "",
    "phoneBusiness": "",
    "phoneHome": "",
    "rent": "",
    "smoker": false,
    "totalAssests": ""},
    microentrepreneurs:[],
    isLoading: false,
    error: null
};

export function microEntrepreneurReducer(state = initialState, action) {
    console.log('Inside registerMEReducer with action '+action.type);
    switch (action.type) {
        case FETCH_ALL_ENTREPRENEURS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_ALL_ENTREPRENEURS_SUCCESS:
            return {
                ...state,
                microentrepreneurs: action.payload,
                isLoading: false,
                error: null
            };
        case FETCH_ALL_ENTREPRENEURS_FAILURE:
            return {
                ...state,
                microentrepreneurs: null,
                isLoading: false,
                error: action.payload
            };
        case REGISTER_ME:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case REGISTER_ME_SUCCESS:
            return {
                ...state,
                microentrepreneur: action.payload,
                isLoading: false,
                error: null,
                message:action.message,
                open:true
            };
        case REGISTER_ME_FAILURE:
            return {
                ...state,
                microentrepreneur: null,
                isLoading: false,
                error: action.payload
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

