const aritGeo = value => {
        const dataType = typeof(value);
        //validates input is not a number
        if(dataType=='number'){
            return 'number';
        }
        // validates input is not a string
        else if(dataType=='string'){
            return 'string';
        }
        //accepts only array
        else if(Array.isArray(value))
        {
            //check lenght of input-array
                if(value.length==0)
                {
                    return 0;
                }
                //check if lenght of input-array is greater than 1
                 if(value.length==1)
                 {
                     return 1;
                 }
                          const firstValue = value[0];
                          //calculates common difference for AP
         const commonDifferenceAp = value[1]-value[0];
          let count = 0;
          //perform check for AP
            for(let i = 0; i < value.length; i++)
            {
                if(typeof(value[i])=='string')
                {
return 'type error';
                }
                 if(Array.isArray(value[i]))
                {
return 'type error';
                }
                const result = checkAp(firstValue,i+1,commonDifferenceAp);
              if(result!=value[i])
              {
                  break;
              }
              else{
                  count++;
              }
            }
            if(count==value.length)
            {
                return 'Arithmetic';
            }
            else{
                //perform check fr GP
                let countGp = 0;
                const commonDifferenceGp = value[1]/value[0];
                for(let i = 0; i < value.length; i++)
            {
                const result = checkGp(firstValue,i+1,commonDifferenceGp);
              if(result!=value[i])
              {
                  break;
              }
              else{
                  countGp++;
              }
            }
             if(countGp==value.length)
            {
                return 'Geometric';
            }
            else{
                return -1;
            }
            }
        }
        else {
            return 'object';
        }
}
const checkAp = (first,index,commonDifference) =>{
    const firstCal = (index-1)*commonDifference;
 return first+firstCal;
}
const checkGp = (first,index,commonDifference) =>{
    const firstCal = Math.pow(commonDifference,index-1);
  return first*firstCal;
}
export default aritGeo;
