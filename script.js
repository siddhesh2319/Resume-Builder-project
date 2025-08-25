//alert("loading");
function addNewWEField(){
   // console.log("Adding new field");

    let newNode=document.createElement("textarea"); 
    newNode.classList.add('form-control');  
    newNode.classList.add('weField');
    newNode.classList.add("mt-2"); 
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement("textarea"); 
    newNode.classList.add('form-control');  
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2"); 
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');
   
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewSKField(){
    let newNode=document.createElement("textarea"); 
    newNode.classList.add('form-control');  
    newNode.classList.add('skField');
    newNode.classList.add("mt-2"); 
    newNode.setAttribute('rows',1);
    newNode.setAttribute('placeholder','Enter here');
    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById('skAddButton');
   
    skOb.insertBefore(newNode, skAddButtonOb);
}
//generating cv 
function generateCV(){
    //console.log("generating cv ")
let nameField=document.getElementById("nameField").value;
let nameT1=document.getElementById("nameT1")
nameT1.innerHTML=nameField;
let nameT2=document.getElementById("nameT2")
nameT2.innerHTML=nameField;
//direct

document.getElementById("contactT").innerHTML=document.getElementById("contactField"
).value;

document.getElementById("addressT").innerHTML=document.getElementById("addressField"
).value;

document.getElementById("fbT").innerHTML=document.getElementById("fbField"
).value;

document.getElementById("instaT").innerHTML=document.getElementById("instaField"
).value;
document.getElementById("linkedT").innerHTML=document.getElementById("linkedField"
).value;


//objective
document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField"
).value;

//work experience
let wes = document.getElementsByClassName("weField");
let str = "";

for (let i = 0; i < wes.length; i++) {
    str += '<li>' + wes[i].value + '</li>';
}

document.getElementById("weT").innerHTML = "<ul>" + str + "</ul>";


//academic qualification
let aqs = document.getElementsByClassName("aqField");
let str1 = "";

for (let i = 0; i < aqs.length; i++) {
    str1 += '<li>' + aqs[i].value + '</li>';
}

document.getElementById("aqT").innerHTML = "<ul>" + str1 + "</ul>";

let sks = document.getElementsByClassName("skField");
let str2 = "";

for (let i = 0; i < sks.length; i++) {
    str2 += '<li>' + sks[i].value + '</li>';
}

document.getElementById("skT").innerHTML = "<ul>" + str2 + "</ul>";

//code for setting image

let file = document.getElementById('imgField').files[0];
if (file) {
    let reader = new FileReader();
    reader.onload = function() {
        document.getElementById('imgTemplate').src = reader.result;
        document.getElementById('cv-form').style.display = 'none';
        document.getElementById('cv-template').style.display = 'block';
    };
    reader.readAsDataURL(file);
} else {
    // Handle case when no file is selected
    alert("Please select an image file.");
}
document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}

function printcv(){
    window.print();
}