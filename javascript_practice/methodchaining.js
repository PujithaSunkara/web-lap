let username=window.prompt("Enter the name");//without method chaining
 username=username.trim();
  let letter=username.charAt(0);
letter =letter.toUpperCase();
let extra=username.slice(1);
extra=extra.toLocaleLowerCase();
username=letter+extra;
console.log(username);
//with method chaining
username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
console.log(username);
