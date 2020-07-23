// for ( i = 1 ; i <= b ; i ++ )
//  {
//         power = power*a;
//  } chap 38 to 44 q1



// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100)); chap 38 to 44 q2

// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]]; chap 38 to 44 q4
// var Avgmarks = 0;
// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }
// console.log("Average grade: " + (Avgmarks)/students.length);
//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// } chap 38 to 44 q4

// var km, m, cm, f, in;     chap 38 to 44 q8
// print("Enter distance in kilometers: ");
// /* calculate the conversion */
// m = km * 1000;
// cm = km * 1000 * 100;
// f = km * 3280.84;
// in = km * 39370.08;
// print("The distance in Feet: %f\n", f);
// print("The distance in Inches: %f\n", in);
// print("The distance in Meters: %f\n", m);
// print("The distance in Centimeters: %f\n", cm); chap 38 to 44 q8
// }

// var count = 1, working_hours, over_time; chap 38 to 44 q9
// var over_time_pay;

// while(count<=10)
// {
//     printf("Enter the working hours of employee no %d: ", count);
//     scanf("%d", &working_hours);
//     if(working_hours>40)
//     {
//         over_time = working_hours - 40;
//         over_time_pay = over_time * 12.00;
//         print("Employee No %d overtime pay is %.2f\n", count, over_time_pay);
//     }
//     else
//         print("You have to work for more than 40 hours to get over time pay\n");

//     count++; chap 38 to 44 q9
// }
// }
// var elem = document.getElementById('para'); chap 58 to 67 q1
// setTimeout(function(){}, 0) chap 58 to 67 q1
// document.getElementById("mytext").value = "My value";chap 58 to 67 q1

// function clickCounter() {
//     if (typeof(Storage) !== "undefined") {
//       if (localStorage.clickcount) {
//         localStorage.clickcount = Number(localStorage.clickcount)+1;
//       } else {
//         localStorage.clickcount = 1;
//       }
//       document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//     } else {
//       document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";