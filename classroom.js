
var classroom = {
roomnumber:"F103",
students:18,
};
var x = prompt("roomnumber, or students?");
var lowerinput = x.toLowerCase();
if (lowerinput==="roomnumber"||lowerinput==="students")
{window.alert(classroom[lowerinput]);}
else {inform();}

function inform () {
var x = prompt("roomnumber, or students?");
var lowerinput = x.toLowerCase();
if (lowerinput==="roomnumber"||lowerinput==="students")
{window.alert(classroom[lowerinput]);}
else {inform();}
}
