// //challenge one;
// // write date like this;
// /** Today is : Friday.
//  * Current Time: 10 PM : 30 : 38
//  */

// function date(){
//     var today = new Date();
//     var day = today.getDay();
//     var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var hour = today.getHours();
//     var minute = today.getMinutes();
//     var second = today.getSeconds();
//     if(hour < 12){
//         hour = hour + " AM"
//     }
//     else{
//         hour = hour - 12 + " PM"
//     }
//     document.write("Today is: " + dayList[day] + "." + "<br>" + "Current Time: " + hour + " : " + minute + " : " + second )
// } 

// /** Challenge 2:
//  * find the area of triangle where the length of its sides 5, 6, 7;
//  */
// function triangleArea(s1, s2, s3){
    
//     var semiPerimeter = (s1 + s2 + s3 )/ 2;
//     var area = Math.sqrt(semiPerimeter*(semiPerimeter - s1)* (semiPerimeter - s2) * (semiPerimeter - s3));
//     return area;
// }

// /** Challenge 3
//  * find difference between given number and 13, if the number is greater than 13 return double the absolute difference;
//  */

//  function difference (number){
//      if(number <= 13){
//          result = 13 - number;
//          return result;
//      }
//      else{
//          var result = (number - 13) * 2;
//          return result;
//      }
//  }


// /** Challenge 4
//  * sum of two given integer number. If the number same then compute triple their sum
//  */

// function sumInteger(n1, n2){
//     if( n1 != n2){
//         var sum = n1 + n2;
//         return sum;
//     }
//     else{
//         var sum = (n1 + n2) * 3;
//         return sum;
//     }
// }

// /**Challenge 4 
//  * check two given number and return true if one of the number is 50 or if their sum is 50
//  */
// function test50(n1, n2){
//     if( n1 == 50 || n2 == 50){
//         return true;
//     }
//     else if( n1 + n2  == 50){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// /** Challenge 5
//  * given integer is within 20 of 100 or 400
//  */
// function within400(number){
//     if(number <= 20){
//         return "this number isn't within 20 of 100"
//     }
//     else if ( number > 20 && number < 100){
//         return "this number is within 20 to 100";
//     }
//     else if ( number == 100){
//         return "this number is equal to 100"
//     }
//     else if ( number > 100 && number < 400){
//         return "this number is between 20 and 400";
//     }
//     else {
//         return "this number out of between 0 and 400" ;
//     }
// }

// /** challenge 6
//  *  check two number signs 
//  * */

// function checkSign( n1, n2){
//     if(n1 < 0 && n2 >= 0){
//         console.log (n1, "negative number and ", n2, "positive number");
//     }
//     else if( n1 >= 0 && n2 < 0){
//         console.log (n1, "positive number and ", n2, "negative number");
//     }
//     else if( n1 >= 0 && n2 >= 0){
//         console.log("both are positive number");
//     }
//     else{
//         console.log("both are negative number");
//     }
// };

// /**Challenge 7
//  * given positive number is multiple of 3 or a multiple of 7
//  */
// function divisible3or7(number){
//      if( number % 3 == 0 && number % 7 == 0){
//         return "This number divisible by both 3 and 7"
//     }
//     else if(number % 7 == 0){
//         return "this number is divisible by 7";
//     }
    
//     else if((number % 3) == 0){
//             return "This number is divisible by 3";
//     }
//     else{
//         return "Not divisible by 3 or 7";
//     }
// }


function divisible3or7(number){
    if( number % 3 == 0 && number % 7 == 0){
       return "This number multiple  by both 3 and 7"
   }
   else if(number % 7 == 0){
       return "this number is multiple  by 7";
   }
   
   else if((number % 3) == 0){
           return "This number is multiple  by 3";
   }
   else{
       return "Not divisible by 3 or 7";
   }
}