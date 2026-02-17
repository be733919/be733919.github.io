function tickUp() {
    let counter = document.getElementById("counter");
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

function runForLoop() {
    let result = "";
    let counter = document.getElementById("counter");
    for (let i=0; i<=counter.innerHTML; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").innerHTML = result; 
}


function showOddNumbers() {
    let result = "";
    let counter = document.getElementById("counter");
    for (let i=0; i<=counter.innerHTML; i++) {
        if (i % 2 === 1){
            result += i + " ";
        }
        
    }
    document.getElementById("oddNumberResult").innerHTML = result;
}

function addMultiplesToArray() {
    let result = [];
    let counter = document.getElementById("counter");
    for (let i=0; i<=counter.innerHTML; i++) {
        if (i % 5 === 0 && i !== 0){
            result.push(i);
        }

    }
    sorted = result.toReversed();
   console.log(sorted);
}


function printCarObject() {
    let car = {
        type: document.getElementById("carType").value,
        mpg: document.getElementById("carMPG").value,
        color: document.getElementById("carColor").value
    }
    console.log(car);
}

function loadCar(carNum){
    let car;
    if (carNum === 1) car = carObject1;
    else if (carNum === 2) car = carObject2;
    else if (carNum === 3) car = carObject3;

    if (car) {
        document.getElementById("carType").value = car.cType;
        document.getElementById("carMPG").value = car.cMPG;
        document.getElementById("carColor").value = car.cColor;
    }
}


function changeColor(style) {
    if (style === 1) {
        document.getElementById("styleParagraph").style.color = "red";
    } 
    else if (style === 2) {
        document.getElementById("styleParagraph").style.color = "green"; 
    }
    else if (style === 3) {
        document.getElementById("styleParagraph").style.color = "blue";
     }
}
