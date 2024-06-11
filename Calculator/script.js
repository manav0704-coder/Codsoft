let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
let defaultFontSize = 65; // Default font size of the input box
let maxLength = 7; // Maximum length of the input string before font size adjustment

buttonsArray.forEach(function(btn) {
    btn.addEventListener('click', function(event) {

        if (event.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (event.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
            display.style.fontSize = defaultFontSize + 'px'; // Reset font size to default
        } else if (event.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        } else {
            string += event.target.innerHTML;
            // Check if the length of the input string exceeds the maximum length
            if (string.length > maxLength) {
                // Calculate the font size to fit all the characters
                let fontSize = 320 / string.length; // Adjust the divisor as needed
                display.style.fontSize = fontSize + 'px';
            } else {
                display.style.fontSize = defaultFontSize + 'px'; // Reset font size to default
            }
            display.value = string;
        }
    });

});



