const price=[5,30,10,25,25,20];
 const total=price.reduce(sum);
 console.log(`$${total.toFixed(2)}`);
 function sum(accumulator,element)
 {
    return accumulator+element
 }
 //here accumulator is first previous numner and element is next number
 //accumulator=5
 //element=30
 //accumulator+element=35
 //accumulator=35
 //element=10
 //accumulator+element=45
 //its go on
 //2
 const grades=[75,50,90,80,65,95];
 const maximum=grades.reduce(getMax);
  const minimum=grades.reduce(getmin);
 console.log(minimum);
 function getMax(accumulator,element)
 {
    return Math.max(accumulator,element);
 }
 function getmin(accumulator,element)
 {
    return Math.min(accumulator,element);
 }