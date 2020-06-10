// variable of building types //

let building = document.querySelector("#building");
let residential = document.querySelector("#residentialForm");
let commercial = document.querySelector("#commercialForm");
let corporate = document.querySelector("#corporateForm");
let hybrid = document.querySelector("#hybridForm");
let elevator = document.getElementsByClassName("elevator")[0];

// Show fields depending on building type //
building.addEventListener("change", function () {
        // if on select value 0=
    if (building.value == 0) {
        residential.style.display = "none";
        commercial.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
        // if on residential select value 1
    } else if (building.value == 1) {
        residential.style.display = "block";
        commercial.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
        // if on commercial select value 2
    } else if (building.value == 2) {
        commercial.style.display = "block";
        residential.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
        // if on corporate select value 3
    } else if (building.value == 3) {
        corporate.style.display = "block";
        commercial.style.display = "none";
        residential.style.display = "none";
        hybrid.style.display = "none";
        // if on hybrid select value 4//
    } else if (building.value == 4) {
        hybrid.style.display = "block";
        residential.style.display = "none";
        commercial.style.display = "none";
        corporate.style.display = "none";
    }
      // for loop uncheck radio button fields and elevator to 0//
    for (var b = 0; b < buttons.length; b++) {
        buttons[b].checked = false;
        elevator.value = 0;
        prices.value = "$ " + 0;
        installation.value = "$ " + 0;
        total.value = "$ " + 0;
    }
});


// for residential // 

let resFields = document.getElementsByClassName("resFields");
let resArray = Array.from(resFields);

for (var r = 0; r < resArray.length; r++) {
    resArray[r].addEventListener("blur", function () {

            let apartments = document.getElementsByName("residential[apartments]")[0];
            let floorsRes = document.getElementsByName("residential[floors]")[0];

            let avgDoors = parseInt(apartments.value) / parseInt(floorsRes.value);
            let numElevators = avgDoors / 6;
            let numColumns = Math.ceil(floorsRes.value / 20);


            if (apartments.value.length > 0 && floorsRes.value.length > 0) {

                elevator.value = Math.ceil(numElevators) * numColumns;

            }
    })
}

// for commercial// 
let comField = document.getElementsByClassName("comField");
let comArray = Array.from(comField);

for (var c = 0; c < comArray.length; c++) {
    comArray[c].addEventListener("blur", function () {
         
        let elevatorNeeded = document.getElementsByName("commercial[cages]")[0];
        
            //elevator.value = elevatorNeeded.value;
         //elevator.value = elevatorNeeded.value;

         if (elevatorNeeded.value.length > 0 && elevator.value.length > 0) {
                
            elevator.value = elevatorNeeded.value;
            
        }   

            
    });
}


   


        

// for corporate // 

let corpFields = document.getElementsByClassName("corporateField");
let corporateArray = Array.from(corpFields);

for (var p = 0; p < corporateArray.length; p++) {
    corporateArray[p].addEventListener("blur", function () {

        let occupants = document.getElementsByName("contact[occupants]")[0];
        let floors = document.getElementsByName("contact[floors]")[0];
        let basements = document.getElementsByName("contact[basements]")[0];

        let numStories = parseInt(floors.value) + parseInt(basements.value);
        let totalOccupants = occupants.value * numStories;
        let numElevators = Math.ceil(totalOccupants / 1000);
        let numColumns = Math.ceil(numStories / 20);

        if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
            let elevPerCol = Math.ceil(numElevators / numColumns);
            elevator.value = elevPerCol * numColumns;
        }
    });
}

// for hybrid // 

let hybFields = document.getElementsByClassName("hybFields");
let hybridArray = Array.from(hybFields);

for (var h = 0; h < hybridArray.length; h++) {
    hybridArray[h].addEventListener("blur", function () {
        let occupants = document.getElementsByName("contact[occupants]")[1];
        let floors = document.getElementsByName("contact[floors]")[1];
        let basements = document.getElementsByName("contact[basements]")[1];

        let numStories = parseInt(floors.value) + parseInt(basements.value);
        let totalOccupants = occupants.value * numStories;
        let numElevators = Math.ceil(totalOccupants / 1000);
        let numColumns = Math.ceil(numStories / 20);


        if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
            let elevPerCol = Math.ceil(numElevators / numColumns);
            elevator.value = elevPerCol * numColumns;
        }
    });
}

// unit price for different packages
let buttons = document.getElementsByClassName("buttons");
let prices = document.getElementsByClassName("price")[0];
let installation = document.getElementsByClassName("installation")[0];
let total = document.getElementsByClassName("total")[0];
let unit = [7565, 12345, 15400];
let fees = [0.10, 0.13, 0.16];

function packagePrice() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            let price = parseFloat(elevator.value * unit[i]);
            prices.value = "$ " + price.toFixed(2);
            let fee = parseFloat(price * (1+fees[i])) - price;
            installation.value = "$ " + fee.toFixed(2);
            let totalPrice = parseFloat(price) + parseFloat(fee);
            total.value = "$ " + totalPrice.toFixed(2);
        } 
    }
}
