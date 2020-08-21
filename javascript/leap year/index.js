    function leapYear(){
        var year = prompt("Input year");
        var result = year % 4;
        result1 = year % 100;
        result1 = year % 400;
        if(result == 0 & result1 !=0){
            document.getElementById("leap").innerHTML ="congratulations! This is the leap Year"
        }
        else{
            document.getElementById("leap").innerHTML = "sorry! You are the looser"
        }
    }
  