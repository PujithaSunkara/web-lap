function generatepass(length,includelower,includeupper,includenumbers,includesymbols)
{
const lowercase="abcdefghijklmnopqrstuvwxyz";
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nummbers="0123456789";
const symbols ="!@#$&*()";
let allowchar="";
let password="";
allowchar+=includelower?lowercase:"";
allowchar+=includeupper?uppercase:"";
allowchar+=includenumbers?nummbers:"";
allowchar+=includesymbols?symbols:"";

if(length<0)
{
    return `(password length must be at least 1)`;
}
if(allowchar.length===0)
{
    return `(at least 1 nneds to be selected)`;
}
for(let i=0;i<length;i++)
{
    const ran=Math.floor(Math.random()*allowchar.length);
    password+=allowchar[ran];
}
 return password;
    
}
const lengthgen=12;
const includelower=false;
const includeupper=false;
const includenumbers=false;
const includesymbols=false;
const password=generatepass(lengthgen,includelower,includeupper,includenumbers,includesymbols);
console.log(`Generated password is ${password}`);