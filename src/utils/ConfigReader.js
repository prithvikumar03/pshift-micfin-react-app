export function getMicfinServiceURL(){
    if (process.env.REACT_APP_ENV==='PROD'){
        return(process.env.REACT_APP_MICFIN_SERVICE_PROD_URL);
    }
}

export function isProd(){
    if (process.env.REACT_APP_ENV==='PROD'){
        return true;
    }
}