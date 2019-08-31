export const FETCH_ALL_MFIS = 'FETCH_ALL_MFIS';
export const FETCH_MFI_SUCCESS = 'FETCH_MFI_SUCCESS';
export const FETCH_MFI_FAILURE = 'FETCH_MFI_FAILURE';

export const REGISTER_MFI = 'REGISTER_MFI';
export const REGISTER_MFI_SUCCESS = 'REGISTER_MFI_SUCCESS';
export const REGISTER_MFI_FAILURE = 'REGISTER_MFI_FAILURE';


export const fetchMFI = () => ({
    type: FETCH_ALL_MFIS,
});

export const fetchMFISuccess = (MFI) => ({
    type: FETCH_MFI_SUCCESS,
    payload: MFI
});

export const fetchMFIFailure = (message) => ({
    type: FETCH_MFI_FAILURE,
    payload: message
});

export const registerMFI = (mfiInfo) => ({
    type: REGISTER_MFI,
    payload: mfiInfo
});

export const registerMFISuccess = (MFI) => ({
    type:  REGISTER_MFI_SUCCESS,
    payload: MFI,
    message: "MFI registered successfully."
});

export const registerMFIFailure = (error) => ({
    type:  REGISTER_MFI_FAILURE,
    payload: error,
    message: "MFI registration failed !"
});