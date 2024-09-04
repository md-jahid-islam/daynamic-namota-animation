

function generateNamota() {
    const number = document.getElementById("numberInput").value;
    const tableContainer = document.getElementById("namotaTable");
    
    tableContainer.innerHTML = '';

    if (number && number > 0) {
        for (let i = 1; i <= 10; i++) {
            const result = number * i;
            const namotaBox = document.createElement('div');
            namotaBox.classList.add('namota-box');
            namotaBox.innerHTML = `${number} x ${i} = ${result}`;
            tableContainer.appendChild(namotaBox);
        }
    } else {
        tableContainer.innerHTML = '<p>Please enter a valid number above 0.</p>';
    }
}

script.js

