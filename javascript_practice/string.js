let username="pujii  ";
console.log(username.charAt(0));
console.log(username.indexOf("u"));
console.log(username.lastIndexOf("i"));
console.log(username.length);

console.log(username.trim());
username=username.toUpperCase();
console.log(username);
username=username.repeat(3);
console.log(username);
username=username.toLowerCase();
console.log(username);


let result=username.startsWith("p");
console.log(result)
if(result)
{
    console.log("your username starts with p ")
}
else{
    console.log(username);
}


let re2=username.endsWith("p");
console.log(re2)
if(re2)
{
    console.log("your username  not starts with p ")
}
else{
    console.log(username);
}


let int=username.includes(" ");
console.log(int)
;if(int)
{
    console.log("cant include white spaces");
}
else{
    console.log(username);
}



let phonenumberr="123-456-8907";
phonenumberr=phonenumberr.replaceAll("-","/");
console.log(phonenumberr);


let phone="123-456-8907";
phone=phone .padStart(15,"0");
console.log(phone);

