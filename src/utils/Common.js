export function populateSelect(inputArray){
    let result=[];
    inputArray.forEach(element => {
        result.push(rJson(element))
     })
    return(result);
}

function rJson(item){

    return(
        {
            value:`${item}`,
            label:`${item}`
        });
}
    