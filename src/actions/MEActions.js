export const REGISTER_ME = 'REGISTER_ME';
export const REGISTER_ME_SUCCESS = 'REGISTER_ME_SUCCESS';
export const REGISTER_ME_FAILURE = 'REGISTER_ME_FAILURE';

export const FETCH_ALL_ENTREPRENEURS = 'FETCH_ALL_ENTREPRENEURS';
export const FETCH_ALL_ENTREPRENEURS_SUCCESS = 'FETCH_ALL_ENTREPRENEURS_SUCCESS';
export const FETCH_ALL_ENTREPRENEURS_FAILURE = 'FETCH_ALL_ENTREPRENEURS_FAILURE';



export const registerME = (microentrepreneur) => ({
    type: REGISTER_ME,
    payload: microentrepreneur      
});

export const registerMESuccess = (microentrepreneur) => ({
    type:  REGISTER_ME_SUCCESS,
    payload: microentrepreneur,
    message: "Microentrepreneur registered successfully."
});

export const registerMEFailure = (error) => ({
    type:  REGISTER_ME_FAILURE,
    payload: error
});

export const fetchAllEntrepreneurs = (mfiId) => ({
    type: FETCH_ALL_ENTREPRENEURS,
    payload:mfiId
});

export const fetchAllEntrepreneursSuccess = (microentrepreneurs) => ({
    type:  FETCH_ALL_ENTREPRENEURS_SUCCESS,
    payload: microentrepreneurs
});

export const fetchAllEntrepreneursFailure = (error) => ({
    type:  FETCH_ALL_ENTREPRENEURS_FAILURE,
    payload: error
});


