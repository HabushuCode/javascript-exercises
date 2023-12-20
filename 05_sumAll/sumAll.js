const sumAll = function(start,end) {
   if(start < 0 || end < 0) {
    return 'ERROR';
   } else if (!Number.isInteger(start)|| !Number.isInteger(end)){
    return 'ERROR';
   } else if (start>end) {
    let temp = start;
    start = end;
    end =temp;
   }
   
    let total = 0;
    for(let i=start; i<=end; i++){
        total+=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
