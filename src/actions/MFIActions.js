export const FETCH_MFI = 'FETCH_MFI';
export const FETCH_MFI_SUCCESS = 'FETCH_MFI_SUCCESS';
export const FETCH_MFI_FAILURE = 'FETCH_MFI_FAILURE';

export const fetchMFI = () => ({
    type: FETCH_MFI,
});

export const fetchMFISuccess = (MFI) => ({
    type: FETCH_MFI_SUCCESS,
    payload: MFI
});

export const fetchMFIFailure = (message) => ({
    type: FETCH_MFI_FAILURE,
    payload: message
});