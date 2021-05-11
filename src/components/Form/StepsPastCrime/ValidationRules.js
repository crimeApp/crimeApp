export const validatePersonalDetails = (inputs) => {
    //Nombre error
   const errors = {};
   if (inputs.name === '') {
       errors.name = 'Completar casilla';
   } 

   //DNI Errors
   if(inputs.DNI === '' || inputs.DNI.length<6){
       errors.DNI = 'Completar casilla'
   }

   return errors;
}

export const validateTheftDetails = (inputs) => {
    //theftinfo error
    
}

export const validateTheftInfo = (inputs) => {
    const errors = {};
    if (inputs.theftinfo === '') {
        errors.theftinfo = 'Completar casilla';
    } 
 
    //typeoftheft Errors
    if(!inputs.typeoftheft === ''){
        errors.typeoftheft = 'Completar casilla'
    }
 
    return errors;

}
