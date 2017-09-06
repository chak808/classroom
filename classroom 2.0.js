
var classroom = {
roomnumber:"F103",
students:18,
};
var x = prompt("roomnumber, or students?");
var lowerinput = x.toLowerCase();
if (lowerinput==="roomnumber"||lowerinput==="students")
{window.alert(classroom[lowerinput]);}
else {
for(i = 0; i < 3; i++) {
var x = prompt("roomnumber, or students? You have"+ " " +(3-i)+ " " +"tries left");
var lowerinput = x.toLowerCase();
if (lowerinput==="roomnumber"||lowerinput==="students")
{
i = 3;
window.alert(classroom[lowerinput]);}
}
}
