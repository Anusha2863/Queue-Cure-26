let tokenNumber = 1;
let currentToken = 0;
let totalPatients = 0;

function addPatient() {

    let name = document.getElementById("patientName").value;

    if (name === "") {
        alert("Please enter patient name");
        return;
    }

    let list = document.getElementById("patientList");

    let item = document.createElement("li");

    item.textContent = "Token " + tokenNumber + " - " + name;

    list.appendChild(item);

    tokenNumber++;
    totalPatients++;

    document.getElementById("totalPatients").textContent = totalPatients;

    updateStats();

    document.getElementById("patientName").value = "";
}

function callNext() {

    if (currentToken < tokenNumber - 1) {

        currentToken++;

        document.getElementById("currentToken").textContent = currentToken;

        updateStats();
    }
}

function updateStats() {

    let waiting = (tokenNumber - 1) - currentToken;

    document.getElementById("waitingCount").textContent = waiting;

    document.getElementById("queueLength").textContent = waiting;

    document.getElementById("servedPatients").textContent = currentToken;
}