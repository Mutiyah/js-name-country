let my_name = 'Mutiyah Muritala';
let height = 5.5;
let country = "Nigeria";

let dom1 = document.getElementById("name");
let dom2 = document.getElementById("height");
let dom3 = document.getElementById("country");

dom1.innerHTML = my_name;
dom2.innerHTML = height;
dom3.innerHTML = country



console.log("My name is " + my_name + ", i am " + height  + "feet tall and i am from " + country )