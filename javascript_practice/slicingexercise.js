let username=window.prompt("Enter the name");
 username=username.trim();
  let letter=username.charAt(0);
letter =letter.toUpperCase();
let extra=username.slice(1);
extra=extra.toLocaleLowerCase();
username=letter+extra;
console.log(username);
