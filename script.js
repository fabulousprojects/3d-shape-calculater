var checker = "volume"
var height = document.getElementById("height");
var radius = document.getElementById("radius");
var edgeLength = document.getElementById("edge-length");
var length = document.getElementById("length");
var width = document.getElementById("width");
var BaseSide1 = document.getElementById("BaseSide1");
var BaseSide2 = document.getElementById("BaseSide2");
var BaseSide3 = document.getElementById("BaseSide3");
var calcbtn = document.getElementById("calculate");

function show() {
    height.style.display = "block";
    radius.style.display = "block";
    edgeLength.style.display = "block";
    length.style.display = "block";
    width.style.display = "block";
    calcbtn.style.display = "block";
    }

function changeScreen() {
    window.accuracy = document.getElementById("acc").value;
    document.getElementById("select-shape").style.display = "none";
    window.shapeName = document.getElementById("dropdown").value;
    show();
    dissable();
}

function changer() {
    checker = "SA";
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    tab2.style.background = "rgb(197, 197, 197)";
    tab1.style.background = "rgb(230, 230, 230)";
}

function changer2() {
    checker = "volume";
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    tab1.style.background = "rgb(197, 197, 197)";
    tab2.style.background = "rgb(230, 230, 230)";
}

function dissable() {
   var Dshapename = window.shapeName;

   switch (Dshapename) {
       case 'Cone' :
            edgeLength.style.display = "none";
            length.style.display = "none";
            width.style.display = "none";
            break;

        case 'Cube' :
            height.style.display = "none";
            radius.style.display = "none";
            length.style.display = "none";
            width.style.display = "none";
            break;

        case 'Cubeoid' : 
             edgeLength.style.display = "none";
             radius.style.display = "none";
             break;
        
        case 'Sphere' :
            height.style.display = "none";
            edgeLength.style.display = "none";
            length.style.display = "none";
            width.style.display = "none";
            break;

        case 'Cylinder' :
            edgeLength.style.display = "none";
            length.style.display = "none";
            width.style.display = "none";
            break;

        default : 
        alert("please select from the dropdown");
        window.location.reload();
        break;
   }

}

function formulaCaller() {
    var Fshapename = window.shapeName;
    switch (Fshapename) {
        case 'Cone' :
            coneFormula();
            break;
        
        case 'Cube' :
            cubeformula();
            break;
        
        case 'Cubeoid' : 
            cubeoidformula();
            break;
        
        case 'Sphere' :
            sphereFormula();
            break;

        case 'Cylinder' :
            cylinderFormula();
            break;
    }

}

//formulas 

function coneFormula() {
    var heightValue = document.getElementById("height").value;
    var radiusValue = document.getElementById("radius").value;
    var intHeight = parseInt(heightValue);
    var intRadius = parseInt(radiusValue);

    if (checker === "volume") {
        window.answer = Math.PI * intRadius ** 2 *  intHeight / 3;
        
        }

    if (checker === "SA") {
        
        var step1 = Math.sqrt((intHeight ** 2) + (intRadius ** 2));
        var step2 = intRadius + step1;
        var step3 = 3.1415926 * intRadius;
        window.answer = step2 * step3; 
    }
    document.getElementById("result").innerHTML = `${parseFloat(window.answer.toFixed(window.accuracy))}`;
    
}



function cubeformula() {
    var edgeLength = document.getElementById("edge-length").value;
    var intEL = parseInt(edgeLength);

    if (checker === "volume") {
        window.answer = intEL ** 3;

    }

    if (checker === "SA") {
        window.answer = 6 * intEL ** 2;
    }
    document.getElementById("result").innerHTML = `${parseFloat(window.answer.toFixed(window.accuracy))}`;
}

function cubeoidformula() {
    var height = document.getElementById("height").value
    var width = document.getElementById("width").value;
    var length = document.getElementById("length").value;
    var intHeight = parseInt(height);
    var intWidth = parseInt(width);
    var intLength = parseInt(length);

    if (checker === "volume") {
        window.answer = intHeight * intLength * intWidth;
    }

    if (checker === "SA") {
        var step1 = intLength * intWidth;
        var step2 = intWidth * intHeight;
        var step3 = intHeight * intLength;
        var step4 = step1 + step2 + step3;
        window.answer = 2 * step4;
    }

    document.getElementById("result").innerHTML = `${parseFloat(window.answer.toFixed(window.accuracy))}`;

}



function sphereFormula() {
    var radius = document.getElementById("radius").value;
    var intRadius = parseInt(radius);

    if (checker === "volume") {
        window.answer = 4 / 3 * Math.PI * intRadius ** 3;
    }

    if (checker === "SA") {
        window.answer = 4 * Math.PI * intRadius ** 2;
    }
}
    function cylinderFormula() {
    var radius = document.getElementById("radius").value;
    var height = document.getElementById("height").value;
    var intRadius = parseInt(radius);
    var intHeight = parseInt(height);

    if (checker === "volume") {
        window.answer = Math.PI * intRadius ** 2 * intHeight;
    }

    if (checker === "SA") {
        window.answer = 2 * Math.PI * intRadius * intHeight + 2 * Math.PI * intRadius ** 2;
    }
    document.getElementById("result").innerHTML = `${parseFloat(window.answer.toFixed(window.accuracy))}`;
   
}

