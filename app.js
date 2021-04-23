var number=[], boolArray=[], mixedArray=[];
var qualification = [];

number = [5,3,4,7,2,59];
boolArray = [false,true]
mixedArray = ["Age", 55, true,66,false,]

qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M. phil."];

document.write("<h2>Qualifications</h2>");
document.write("1) " + qualification[0]+"<br>");

for(var i = 1; i < qualification.length; i++){
    
    document.write(i+") " + qualification[i]+"<br>");
}


 /*********Question 8 ***********/

var students = ["Nadir", "Ahmed", "Ali"]
var obtMarks = [320, 230, 480]
var totalMarks = 500

document.write("Score of "+ students[0] +" is " + obtMarks[0] + ". Percentage: " + (obtMarks[0]/totalMarks) * 100 + "%<br>");

document.write("Score of "+ students[1] +" is " + obtMarks[1] + ". Percentage: " + (obtMarks[1]/totalMarks) * 100 + "%<br>");

document.write("Score of "+ students[2] +" is " + obtMarks[2] + ". Percentage: " + (obtMarks[2]/totalMarks) * 100 + "%<br>");


/**********Quest 9 ****************/
var colors = ["red", "green","yellow", "blue", "orange", "Brown"]

var inp_color = prompt("what color you want to add to the begining");

colors.unshift(inp_color);
document.write(colors.toString());

var endColor = prompt("what color you want to add to the end");
colors.push(endColor);
document.write(colors.toString());

colors.shift();
document.write(colors.toString());

colors.pop();
document.write(colors.toString());

var addColor = +prompt("which index you want to add a color")
var Color = prompt("Enter color Name")
colors.splice(addColor, 0, Color);
document.write(colors.toString());

var index = +prompt("which index you want to remove color")
var numberOfColors = +prompt("How many colors you want to Remove")
colors.splice(index, numberOfColors);
document.write(colors.toString());


/*************Quest 10 ************/

var scores = [120, 320, 230, 170,480, 300 ]

document.write(scores.sort(function(a,b){return a-b}));

/************Quest 11 *************/

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

var selectedCities = cities.slice(1,4)

document.write("Cities List: <br>" + cities.toString())
document.write("<br>Selected Cities: <br>" + selectedCities.join(" "))


/************Quest 15 *******/

var phones = ["Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<select> <option>"+ phones[0] +"</option><option>"+phones[1] +"</option> <option>"+phones[2] +"</option> <option>"+phones[3] +"</option> <option>"+phones[4] +"</option> </select>")


 /*********Phone book *********/
var names = ["Ahmed", "Ali", "Nadir", "Ghous", "Bashir", "Majid"]
var numbers = ["023883487", "9829348","98372429","163877492","74832309","02839482"]

var inp_name = prompt("Enter name ") 
var inp_number = prompt("Enter Phone no. ") 

names.push(inp_name) 
numbers.push(inp_number) 

var remove = prompt("Enter Name to remove frome Phone")

var ind = names.indexOf(remove);
names.splice(ind, 1)
numbers.splice(ind,1)