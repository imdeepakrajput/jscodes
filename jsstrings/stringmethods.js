//  STRING METHODS IN JS---
// => These are built-in functions to manipulate a string-

// 1. str.toUpperCase()            // This method makes the characters in capital letter.

        // let str = "deepakRajput"

        // console.log(str.toUpperCase());


// 2. str.toLowerCase()           // This method make the characters in small letter.

        // let str = "DEEPAKRAJPUT"

        // console.log(str.toLowerCase());


// 3. str.trim()                  //  This method removes the white spaces from the starting and from the end but not from the middle.

        // let str = "    DEEPAK RAJPUT IS ON TORK   "

        // console.log(str);
        // console.log(str.trim());


// 4. str.slice(start,end?)       // returns part of string--

        // let str = "deepakRajput";

        // console.log(str.slice(6, 12));


// 5. str1.concat(str2)           // This method adds two strings 

        // let str1 = "deepak";
        // let str2 = " rajput";

        // let result = str1.concat(str2)
        // let add = str1+str2;
        // let sum = "hello" + str2 + 123;

        // console.log(result);

        // console.log(add);

        // console.log(sum);



// 6. str.replace(searchVal,newVal)        //  This method replaces the search value with the new value..


        // let str = "deepakRajput";

        // let newstr = str.replace("deepak","royal");

        // console.log(newstr);


        // let str = "hellololo"

        // console.log(str.replace("lo", "p"));
        // console.log(str.replaceAll("lo", "p"));        // REPLACEALL *****



// 7. str.charAt(idx)              //  This method finds the value by the index number and prints.


        // let str = "deepakRajput";

        // console.log(str.charAt(8));

        // /*   if we want to replace any character with new one so what we will do we will create a new sting 
        //     because we can't change origin value or string    */


        // let str2 = str.replace("Rajput", "Singh");

        // console.log(str2);




//  PRACTICE QUESTION :


/* QUE :  Prompt the user to enter their full name . Generate a username for them based on the input.
    Start username with @, followed by their full name and ending with the fullname length.     */

// SOL : 

// let userNam = prompt("Enter your username without spaces :")

// let user1 = "@"+userNam.concat(userNam.length);

// console.log(user1);



/* IF YOU WANT TO LEARN MORE STRING METHODS THEN GO TO 
MDN(WEBSITE) AND YOU CAN LEARN MORE...    */
