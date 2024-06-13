const accountId = 12345
let accountEmail = "ashish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 ///not allowed

accountEmail = "soni@gmail.com"
accountPassword = 54321
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])