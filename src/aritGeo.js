class MyApplication{

aritGeo(value){
  if(Array.isArray(value))
  {
      if(value.length==0)
      {
          return 0;
      }
      else{
          const firstValue = value[0];
         const commonDifferenceAp = value[1]-value[0];
          let count = 0;
            for(let i = 0; i < value.length; i++)
            {
                const result = this.checkAp(firstValue,i+1,commonDifferenceAp);
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
                return 'Arithmetric';
            }
            else{
                let countGp = 0;
                const commonDifferenceGp = value[1]/value[0];
                for(let i = 0; i < value.length; i++)
            {
                const result = this.checkGp(firstValue,i+1,commonDifferenceGp);
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
  }
}
checkAp(first,index,commonDifference){
const firstCal = (index-1)*commonDifference;
 return first+firstCal;
}
checkGp(first,index,commonDifference){
    const firstCal = Math.pow(commonDifference,index-1);
  return first*firstCal;
}
}
const app = new MyApplication();
console.log(app.aritGeo([1]));