const accountId = 12345
let accountEmail = "dpk@gmail.com"

// console.log("accountEmail : ",accountEmail)

var accountPassword = "dpk123"

/* prefer not to use var variable 
because of issue in block scope and functional scope. */

accountCity = "Delhi"
let accountState;



accountEmail = "deepak12@gmail.com"
accountPassword = "deepak123"
accountCity = "uttarPradesh"



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
