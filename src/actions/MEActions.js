export const REGISTER_ME = 'REGISTER_ME';
export const REGISTER_ME_SUCCESS = 'REGISTER_ME_SUCCESS';
export const REGISTER_ME_FAILURE = 'REGISTER_ME_FAILURE';



export const registerME = (mfi) => ({
    type: REGISTER_ME,
    payload: {
        
            "meId": "Gayathri G"
    }
      
});

export const registerMESuccess = (microentrepreneur) => ({
    type:  REGISTER_ME_SUCCESS,
    payload: microentrepreneur
});

export const registerMEFailure = (error) => ({
    type:  REGISTER_ME_FAILURE,
    payload: error
});