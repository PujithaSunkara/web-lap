import{PI,getcircumference,getArea,getVolume} from './mathutil.js';
console.log(PI);
const circumference=getcircumference(10);
const area=getArea(10);
const volume=getVolume(10);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);
