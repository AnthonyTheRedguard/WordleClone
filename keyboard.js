const keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], 
['ENTER','Z', 'X', 'C', 'V', 'B', 'N', 'M']];

let keyboard = document.getElementById('keyboard');

// Creating row divs for the keyboard
let row1 = document.createElement('div');
let row2 = document.createElement('div');
let row3 = document.createElement('div');

// Adding id values to each row of keys
row1.setAttribute("id", "keyrow1");
row2.setAttribute("id", "keyrow2");
row3.setAttribute("id", "keyrow3");

let rows = [row1, row2, row3];

// Adding class values to each row of keys
rows.forEach(element => {
    element.setAttribute("class", "row");
    keyboard.appendChild(element);
})

let i = 0; // Index for which array of letters within the keys array
let j = 0; // Index for number of letters currently in row

keys[i].forEach(element => {
    let key = document.createElement('div');
    key.setAttribute('class', 'key');
    if (element == "ENTER"){
        key.setAttribute('id', 'enter-key');
    }
    key.innerText += element; 
    rows[j].appendChild(key);
});